import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convert",
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number | "" {
    if (!value) {
      return "";
    }
    return value * 0.094;
  }
}
