import axios from "axios";
export default async function handler(req, res) {
    // if (req.method !== 'GET') {
    //     return res.status(405).json({ error: 'Method Not Allowed' });
    // }
    
    try {
        console.log('Fetching quiz...');
        
        const response = await axios.get('https://opentdb.com/api.php?amount=10', {
        headers: {
            // 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 
            'Content-Type': 'application/json',
        }
        });
    
        const quiz = response.data;
        res.status(200).json({ quiz });
    } catch (error) {
        console.error('Error fetching quiz:', error);
        res.status(500).json({ error: 'Failed to fetch quiz' });
    }
}