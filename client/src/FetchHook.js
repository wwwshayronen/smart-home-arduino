const fetchHook = (action) => {
  async function fetchData() {
    try {
      const response = await fetch("/api/switch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: action,
        }),
      });
      return response.json();
    } catch (error) {
      console.log(error)
    }   
  }

  fetchData();
};

export default fetchHook;

