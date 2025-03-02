function updateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour24: false 
    };
    const formattedTime = now.toLocaleString('en-US', options);
    document.getElementById('datetime').innerText = formattedTime;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);