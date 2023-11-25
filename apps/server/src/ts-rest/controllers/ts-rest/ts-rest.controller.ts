import { TsRestService } from "@/ts-rest/services/ts-rest/ts-rest.service";
import { Controller } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";

import { contract as c } from "@taskbounty-app/api/contract";

@Controller("notes")
export class TsRestController {
  constructor(private readonly service: TsRestService) {}

  @TsRestHandler(c.getPosts)
  async getPosts() {
    const allPosts = await this.service.getAll();
    return { posts: allPosts };
  }
}
