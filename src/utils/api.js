class Api {
  constructor({ baseUrl, headers }) {
    // Store the base URL and headers so every request uses them
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Helper method: checks if the server responded OK
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // GET /items — fetch all clothing items
  getItems() {
    return fetch(`${this._baseUrl}/items`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // POST /items — add a new clothing item
  addItem({ name, weather, imageUrl }) {
    return fetch(`${this._baseUrl}/items`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, weather, imageUrl }),
    }).then(this._checkResponse);
  }

  // GET /user/me — fetch user info (used in Step 8)
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: "http://localhost:3001", // or your deployed URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
