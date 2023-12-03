// usePost.js

async function usePost(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha na requisição.');
    }

    const responseData = await response.json();
    return { success: true, data: responseData };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export default usePost;
