import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe('POST /api/tasks', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should create a new task and return success message', async () => {
    // Mock the response for a POST request
    fetchMock.mockResponseOnce(
      JSON.stringify({
        status: "success",
        message: "Task created successfully",
       })
    );

    // Send the POST request
    const res = await fetch("http://localhost:3001/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        t_name: "New Task",
        t_desc: "A new task added",
      }),
    });

    // Parse the response
    const data = await res.json();

    // Ensure the response has the correct structure
    expect(data).toHaveProperty("status", "success");
    expect(data).toHaveProperty("message", "Task created successfully");
    
  });
});
