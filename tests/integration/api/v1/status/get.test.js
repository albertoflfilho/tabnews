describe("GET to /api/v1/status", () => {
  beforeEach(async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    return ({ updated_at, dependencies } = await response.json());
  });

  test("Should return status code 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status");
    expect(response.status).toBe(200);
  });

  test("Should return updated_at equal to parsedUpdatedAt valid ISO 8601", async () => {
    expect(updated_at).toBeDefined();
    const parsedUpdatedAt = new Date(updated_at).toISOString();
    expect(updated_at).toEqual(parsedUpdatedAt);
  });

  test("Server version to return number", async () => {
    expect(dependencies.database.pg_server_version).toBeDefined();
    expect(dependencies.database.pg_server_version).toEqual("16.0");
  });

  test("Max connection to return number", async () => {
    expect(dependencies.database.pg_max_conections).toBeDefined();
    expect(dependencies.database.pg_max_conections).toEqual(100);
  });

  test("Opened connections to return number", async () => {
    expect(dependencies.database.pg_opened_connections).toBeDefined();
    expect(dependencies.database.pg_opened_connections).toEqual(1);
  });
});
