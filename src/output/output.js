function print(message)
{
    console.log(message);
}

function warning(message)
{
    print("\033[0;33m" + message + "\033[0m ");
}

function notice(message)
{
    print("\033[0;35m" + message + "\033[0m ");
}

function info(message)
{
    print("\033[1;34m" + message + "\033[0m ");
}

function success(message)
{
    print("\033[0;32m" + message + "\033[0m ");
}

function error(message)
{
    print("\033[0;31m" + message + "\033[0m ");
}

module.exports = {
    print: print,
    warning: warning,
    notice: notice,
    info: info,
    success: success,
    error: error
};
