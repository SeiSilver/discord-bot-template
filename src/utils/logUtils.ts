export class LogUtils {

    private static ERROR_COLOR: string = "\x1b[31m";
    private static INFO_COLOR: string = "\x1b[32m";
    private static WARNING_COLOR: string = "\x1b[33m";
    private static DEBUG_COLOR: string = "\x1b[36m";
    private static CLEAR_COLOR: string = "\x1b[0m";

    public static info(message: string): void {
        console.log(LogUtils.infoString(`=> INFO: ${message}`))
    }

    public static warn(message: string): void {
        console.log(LogUtils.warningString(`=> WARN: ${message}`))
    }

    public static debug(message: string): void {
        console.log(LogUtils.debugString(`=> DEBUG: ${message}`))
    }

    public static error(message: string, error?: any): void {
        if (error) {
            console.error(LogUtils.errorString(`=> ERROR: ${message}, with Exception: ${error}`))
        } else {
            console.error(LogUtils.errorString(`=> ERROR: ${message}`))
        }
    }

    private static errorString(message: string): string {
        return `${LogUtils.ERROR_COLOR} ${message} ${LogUtils.CLEAR_COLOR}`
    }

    private static infoString(message: string): string {
        return `${LogUtils.INFO_COLOR} ${message} ${LogUtils.CLEAR_COLOR}`
    }

    private static debugString(message: string): string {
        return `${LogUtils.DEBUG_COLOR} ${message} ${LogUtils.CLEAR_COLOR}`
    }

    private static warningString(message: string): string {
        return `${LogUtils.WARNING_COLOR} ${message} ${LogUtils.CLEAR_COLOR}`
    }

}