import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const pgServerVersion = await database.query("SHOW server_version");
  const pgMaxConnections = await database.query("SHOW max_connections");
  const databaseName = process.env.POSTGRES_DB;
  const pgOpenedConnections = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const { server_version } = pgServerVersion.rows[0];
  const { max_connections } = pgMaxConnections.rows[0];
  const databaseOpenedConnectionsValue = pgOpenedConnections.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        pg_server_version: Number(server_version),
        pg_max_conections: Number(max_connections),
        pg_opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}

export default status;
