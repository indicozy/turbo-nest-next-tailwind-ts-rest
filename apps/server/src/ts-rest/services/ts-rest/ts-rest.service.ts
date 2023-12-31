import { DB, DbType } from "@/global/providers/db/db";
import { Inject, Injectable } from "@nestjs/common";

import { schema } from "@taskbounty-app/db/index";

@Injectable()
export class TsRestService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async getAll(): Promise<(typeof schema.posts.$inferSelect)[]> {
    const result = await this.db.select().from(schema.posts);

    return result;
  }

  // async list(): Promise<[]> {
  //   return this.db.select().from(schema.posts).orderBy(desc(notes.createdAt));
  // }

  // TODO:
  // async create(row: NewNote): Promise<{ id: string }> {
  //   const result = await this.db.insert(notes).values(row);

  //   return { id: result[0].insertId };
  // }

  // async update(id: number, values: Partial<Note>) {
  //   const result = await this.db
  //     .update(notes)
  //     .set(values)
  //     .where(eq(notes.id, id));

  //   return result[0].affectedRows;
  // }

  // async delete(id: number) {
  //   const result = await this.db.delete(notes).where(eq(notes.id, id));

  //   return result[0].affectedRows;
  // }
}
