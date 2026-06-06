exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    const { message, timestamp } = data;

    try {
        await fetch('https://formspree.io/f/xnngnynw', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                message: message,
                time: timestamp,
            }),
        });
    } catch (err) {
        console.log('Formspree error:', err);
    }
};
