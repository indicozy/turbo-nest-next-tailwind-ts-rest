import { Controller, Get } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";

import { contract as c } from "@taskbounty-app/api/contract";

@Controller()
export class MyController {
  constructor(private readonly service: Service) {}

  @TsRestHandler(c)
  async handler() {
    return tsRestHandler(c, {
      getPost: async ({ params }) => {
        const post = await this.service.getPost(params.id);

        if (!post) {
          return { status: 404, body: null };
        }

        return { status: 200, body: post };
      },
      getPosts: async () => {
        const posts = await this.service.getPosts();

        return { status: 200, body: posts };
      },
    });
  }
}
