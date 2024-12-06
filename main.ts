// TODO: breaks, how to connect in type safe way to db/macos.db SQLite db and do queries?
import { connect } from "./drivers/sqlite"

export const connection = connect("app.db")
export const { $, sync: db, async, native } = connection

async function main() {}

// last_clones_window is a table in db with these columns:
// id, title, created_at
async function insertLastClonesWindow(data: any) {
  await db`insert into last_clones_window (window_start, window_end, clone_count) values (${data})`
}
async function getLastClonesWindow() {
  const result = await db`select * from last_clones_window`
  console.log(result)
}

main()
