
const express = require('express');

const app = express();

// Use cloud-assigned port or local port 8080
const PORT = process.env.PORT || 8080;

// Serve frontend files from public folder
app.use(express.static('public'));

// API 1: Cloud Services
app.get('/api/services', (req, res) => {
    const services = [
        {
            serviceId: 1,
            serviceName: 'Amazon EC2',
            category: 'IaaS',
            pricingModel: 'Pay-as-you-go'
        },
        {
            serviceId: 2,
            serviceName: 'Google App Engine',
            category: 'PaaS',
            pricingModel: 'Pay-per-use'
        },
        {
            serviceId: 3,
            serviceName: 'Microsoft 365',
            category: 'SaaS',
            pricingModel: 'Subscription-based'
        },
        {
            serviceId: 4,
            serviceName: 'Amazon S3',
            category: 'IaaS',
            pricingModel: 'Pay-as-you-go'
        }
    ];

    res.json(services);
});

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'Operational',
        developer: 'Sri Varshini R',
        environment: 'Cloud PaaS'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
