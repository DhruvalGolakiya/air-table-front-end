import { ApiController } from "../axios";

export class DataApiController extends ApiController {
  protected urlPath = "";

  async getData(): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.get();
        if (result.status !== 200) {
          return reject();
        }
        const data = result.data;
        if (data.success !== true) {
          return reject(data.message);
        }
      } catch (e: any) {
        reject(e);
      }
    });
  }
}
