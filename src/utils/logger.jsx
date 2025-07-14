const logger = {
  info: (message) => {
    
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push({ level: 'info', message, timestamp: new Date().toISOString() });
    localStorage.setItem('logs', JSON.stringify(logs));
  },
  error: (message) => {
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push({ level: 'error', message, timestamp: new Date().toISOString() });
    localStorage.setItem('logs', JSON.stringify(logs));
  },
  getLogs: () => {
    return JSON.parse(localStorage.getItem('logs') || '[]');
  }
};

export default logger;