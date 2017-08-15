var daemon = require("daemonize2").setup({
    main: "bin/www",
    name: "zacharysang",
    pidfile: "zacharysang.pid"
});

switch (process.argv[2]) {

    case "start":
        daemon.start();
        break;

    case "stop":
        daemon.stop();
        break;

    default:
        console.log("Usage: [start|stop]");
}