import { Controller } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";

import { contract as c } from "@taskbounty-app/api/contract";

@Controller("")
export class TsRestController {
  constructor(private readonly service: Service) {}

  @TsRestHandler(c.getPosts)
  async getPosts() {
    return tsRestHandler(c.getPosts, async () => {
      const posts = await this.service.getPosts();

      return { status: 200, body: posts };
    });
  }
}
