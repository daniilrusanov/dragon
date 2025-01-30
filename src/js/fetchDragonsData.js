export const fetchDragonsData = async () => {
    const response = await fetch('https://api.jsonbin.io/v3/b/679b557ce41b4d34e481291c');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.record;
};
