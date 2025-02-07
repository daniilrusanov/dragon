export const fetchDragonsData = async () => {
    const response = await fetch('https://api.jsonbin.io/v3/b/67a628eeacd3cb34a8da0062');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.record;
};
