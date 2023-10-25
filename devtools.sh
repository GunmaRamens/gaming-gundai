#!/bin/sh

set -e -u

print_usage() {
    echo "$0 [options] [command]"
    echo
    echo "Commands:"
    echo "  init          Setup environment"
    echo
    echo "Options:"
    echo "  -h, --help    print this message"
    echo
}

init_command() {
    echo "Setup GitHooks" >&2
    git config core.hooksPath .githooks

    if ! which volta 2> /dev/null 1>&2; then
        echo "Please install Volta at first" >&2
        echo "https://volta.sh/" >&2
        exit 1
    fi

    echo "Install Node.js" >&2
    volta install node@lts

    echo "Install dependencies" >&2
    volta install pnpm
    pnpm install
}

main() {
    _short="" _long="" _noarg=""
    while true; do
        case "${1-""}" in
            "-h" | "--help")
                print_usage
                shift 1
                exit 0
                ;;
            "")
                break
                ;;
            *)
                _noarg="${_noarg-""}${1} "
                shift 1
                ;;
        esac
    done
    eval set -- "${_noarg}"
    while true; do
        case "${1-""}" in
            "init")
                init_command
                shift 1
                ;;
            "help")
                print_usage
                shift 1
                exit 0
                ;;
            "")
                break
                ;;
            *)
                echo "Unknown option: $1" >&2
                print_usage >&2
                exit 1
                ;;
        esac
    done
}

main "$@"
