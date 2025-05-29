const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7600536592:AAEEwktge8Q2EsSf7cn0GHME4JuTuAUVZeA',
  id: isNaN(parsedId) ? 1933757704 : parsedId // replace 12345.. with your telegram chat id
};
