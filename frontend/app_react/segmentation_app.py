import streamlit as st
import pandas as pd
import joblib
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
from io import BytesIO
import base64
from sklearn.cluster import KMeans
from streamlit.components.v1 import components
# Configuration de l'application
st.set_page_config(
    page_title="KMeans Segmentation",
    layout="wide",
    page_icon="📊"
)
components.iframe("http://localhost:8501", height=800)

# components.html(
#     '<iframe src="http://localhost:8501" width="100%" height="800"></iframe>',
#     height=800,
# )

# Chargement du modèle (chemin à adapter)
MODEL_PATH = "./src/kmeans_model.pkl"
model = joblib.load(MODEL_PATH)

# Style CSS minimal
st.markdown("""
<style>
    .header {
        color: #1E88E5;
        text-align: center;
        font-size: 2.5em;
        margin-bottom: 20px;
    }
    .upload-box {
        border: 2px dashed #1E88E5;
        border-radius: 5px;
        padding: 20px;
        text-align: center;
        margin: 20px 0;
        background: #f8f9fa;
    }
</style>
""", unsafe_allow_html=True)

# Titre
st.markdown('<h1 class="header">📊 Customer Segmentation</h1>', unsafe_allow_html=True)

# Section d'upload
with st.container():
    st.markdown("### Upload your customer data (CSV format)")
    st.markdown('<div class="upload-box">', unsafe_allow_html=True)
    uploaded_file = st.file_uploader(
        "Choose a CSV file", 
        type="csv",
        label_visibility="collapsed"
    )
    st.markdown('</div>', unsafe_allow_html=True)

# Fonction de traitement
def process_data(df):
    """Effectue la segmentation KMeans"""
    # Sélection des colonnes numériques
    numeric_cols = df.select_dtypes(include=['number']).columns
    
    if len(numeric_cols) < 2:
        st.error("Le fichier doit contenir au moins 2 colonnes numériques dénomé income(le revenu)et spending_score(taux de depenses)")
        return None

    # Prédiction des clusters
    from sklearn.preprocessing import StandardScaler

    # Initialize the scaler
    scaler = StandardScaler()

    # Fit and transform the features
    scaled_data = scaler.fit_transform(df[numeric_cols])
    #X_scaled = scaler.transform(df[numeric_cols])
    clusters = model.predict(scaled_data)
    #df['Cluster'] = model.predict(df[numeric_cols])
    df['Cluster'] =clusters
    
    return df, numeric_cols

# Affichage des résultats
if uploaded_file is not None:
    try:
        df = pd.read_csv(uploaded_file)
        
        with st.spinner("Processing data..."):
            result, numeric_cols = process_data(df)
        
        if result is not None:
            st.success(f"Segmentation terminée ! {len(result['Cluster'].unique())} clusters identifiés.")
            
            # Onglets
            tab1, tab2, tab3 = st.tabs(["Visualisation", "Statistiques", "Export"])
            
            with tab1:
                st.subheader("Visualisation des clusters")
                
                # Graphique 2D
                col1, col2 = st.columns(2)
                with col1:
                    x_axis = st.selectbox("Axe X", numeric_cols, index=0)
                with col2:
                    y_axis = st.selectbox("Axe Y", numeric_cols, index=1 if len(numeric_cols) > 1 else 0)
                
                fig = px.scatter(
                    result,
                    x=x_axis,
                    y=y_axis,
                    color='Cluster',
                    hover_data=[col for col in result.columns if col != 'Cluster'],
                    title="Segmentation KMeans"
                )
                st.plotly_chart(fig, use_container_width=True)
            
            with tab2:
                st.subheader("Statistiques par cluster")
                
                # Heatmap des moyennes
                cluster_means = result.groupby('Cluster')[numeric_cols].mean()
                plt.figure(figsize=(10, 4))
                sns.heatmap(cluster_means.T, annot=True, cmap="Blues", fmt=".1f")
                st.pyplot(plt)
                
                # Distribution des clusters
                st.subheader("Distribution des clusters")
                cluster_counts = result['Cluster'].value_counts().sort_index()
                st.bar_chart(cluster_counts)
            
            with tab3:
                st.subheader("Exporter les résultats")
                
                # CSV
                csv = result.to_csv(index=False).encode('utf-8')
                st.download_button(
                    label="📥 Télécharger les données segmentées",
                    data=csv,
                    file_name='segmented_data.csv',
                    mime='text/csv'
                )
                
                # Graphique en PNG
                if st.button("📸 Exporter le graphique"):
                    fig.write_image("cluster_plot.png")
                    with open("cluster_plot.png", "rb") as f:
                        img = f.read()
                    
                    st.download_button(
                        label="Télécharger l'image",
                        data=img,
                        file_name='cluster_visualization.png',
                        mime='image/png'
                    )
    
    except Exception as e:
        st.error(f"Erreur lors du traitement : {str(e)}")

# Section d'aide
with st.expander("ℹ️ Instructions"):
    st.write("""
    1. **Préparez votre fichier CSV** :
       - Doit contenir des colonnes numériques
       - Pas besoin d'en-têtes spécifiques
    
    2. **Le modèle KMeans** :
       - Utilise un modèle pré-entraîné (4 clusters par défaut)
       - Traite automatiquement toutes les colonnes numériques
    
    3. **Résultats** :
       - Visualisation interactive
       - Statistiques par cluster
       - Export au format CSV
    """)