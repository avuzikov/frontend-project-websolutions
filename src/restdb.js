const baseURL = 'http://localhost:4000/customers';

export async function getAll() {
  const myInit = {
    method: 'GET',
    mode: 'cors'
  };
  try {
    const response = await fetch(baseURL, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in getAll:', error);
    throw error;
  }
}

export async function get(id) {
  const myInit = {
    method: 'GET',
    mode: 'cors'
  };
  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in get(${id}):`, error);
    throw error;
  }
}

export async function post(item) {
  const myInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  };
  try {
    const response = await fetch(baseURL, myInit);
    if (!response.ok) {
      throw new Error(`Error posting data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in post:', error);
    throw error;
  }
}

export async function put(id, item) {
  const myInit = {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  };
  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error updating data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in put(${id}):`, error);
    throw error;
  }
}

export async function deleteById(id) {
  const myInit = {
    method: 'DELETE',
    mode: 'cors'
  };
  try {
    const response = await fetch(`${baseURL}/${id}`, myInit);
    if (!response.ok) {
      throw new Error(`Error deleting data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in deleteById(${id}):`, error);
    throw error;
  }
}
