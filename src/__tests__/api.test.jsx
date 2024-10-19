 

import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe('api test', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('api return correct data', async () => {


     fetchMock.mockResponseOnce(

      JSON.stringify({
        status: "success",
        message: "tasks retrieved successfully",
       
      }))

     const res = await fetch("http://localhost:3000/api/tasks", {
      method: "GET",
    });

    
     const data = await res.json();
   

    // Ensure the response has the correct structure
    expect(data).toHaveProperty("status", "success");
    // expect(data).toHaveProperty("message", "tasks retrieved successfully");
    // expect(res).toHaveProperty("status", 200);
    // expect(data.data).toBeInstanceOf(Array);
    // expect(data.data.length).toBeGreaterThan(0);
    // expect(data.data[0]).toHaveProperty("id", 1);
    // expect(data.data[0]).toHaveProperty("title", "Task 1");
  });
});
