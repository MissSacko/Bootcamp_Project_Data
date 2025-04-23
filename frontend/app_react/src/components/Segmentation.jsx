// SegmentationPage.js
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Bar, Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Segmentation = () => {
    const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    //const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file');
            return;
        }

        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/api/predict/', {
                method: 'POST',
                body: formData,
                // headers are not needed when using FormData
            });

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const data = await response.json();
            setResults(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const renderClusterScatterPlot = () => {
        if (!results) return null;

        const clusterData = {
            datasets: results.data.map(item => ({
                label: `Cluster ${item.cluster}`,
                data: [{
                    x: item.feature1, // Remplacez par vos features
                    y: item.feature2,
                }],
                backgroundColor: getClusterColor(item.cluster),
            }))
        };

        return (
            <Scatter 
                data={clusterData}
                options={{
                    scales: {
                        x: { title: { display: true, text: 'Feature 1' } },
                        y: { title: { display: true, text: 'Feature 2' } },
                    },
                }}
            />
        );
    };

    const renderClusterDistribution = () => {
        if (!results) return null;

        const data = {
            labels: Object.keys(results.cluster_counts),
            datasets: [{
                label: 'Cluster Distribution',
                data: Object.values(results.cluster_counts),
                backgroundColor: Object.keys(results.cluster_counts).map(cluster => 
                    getClusterColor(parseInt(cluster))
            )}]
        };

        return <Bar data={data} />;
    };

    const getClusterColor = (cluster) => {
        const colors = [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
        ];
        return colors[cluster % colors.length];
    };

    return (
        <div class="container mx-auto p-4">
            <h1 class="text-2xl font-bold mb-6">Customer Segmentation</h1>
            
            <form onSubmit={handleSubmit} class="mb-8">
                <div class="mb-4">
                    <label class="block mb-2 font-medium">
                        Upload CSV File:
                        <input 
                            type="file" 
                            accept=".csv"
                            onChange={handleFileChange}
                            class="block w-full mt-1 p-2 border rounded"
                        />
                    </label>
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? 'Processing...' : 'Segment Customers'}
                </button>
                {error && <p class="text-red-500 mt-2">{error}</p>}
            </form>

            {results && (
                <div>
                    <h2 class="text-xl font-semibold mb-4">Results</h2>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-2">Cluster Distribution</h3>
                        <div class="bg-white p-4 rounded shadow">
                            {renderClusterDistribution()}
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-2">Cluster Visualization</h3>
                        <div class="bg-white p-4 rounded shadow">
                            {renderClusterScatterPlot()}
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-2">Cluster Centers</h3>
                        <pre class="bg-gray-100 p-4 rounded overflow-auto">
                            {JSON.stringify(results.cluster_centers, null, 2)}
                        </pre>
                    </div>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-medium mb-2">Raw Data with Clusters</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full bg-white border">
                                <thead>
                                    <tr>
                                        {Object.keys(results.data[0]).map(key => (
                                            <th key={key} class="py-2 px-4 border">{key}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.data.map((row, index) => (
                                        <tr key={index}>
                                            {Object.values(row).map((value, i) => (
                                                <td key={i} class="py-2 px-4 border">{String(value)}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Segmentation;