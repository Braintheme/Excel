import { ExcelCompontnt } from "@core/ExcelComponent";

export class Header extends ExcelCompontnt {
    toHTML() {
        return `<h1>Header</h1>` 
    }
}