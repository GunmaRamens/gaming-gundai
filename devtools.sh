#!/bin/sh

set -e -u

script_path="$(cd "$(dirname "$0")" && pwd)"

print_usage() {
    echo "$0 [options] [command]"
    echo
    echo "Commands:"
    echo "  init          Setup environment"
    echo "  bump [Ver]    Bump version"
    echo
    echo "Options:"
    echo "  -h, --help    print this message"
    echo
}

# change_json [file] [key] [value]
change_json() {
    tmpjson="$(mktemp)"
    cat "$1" > "$tmpjson"
    jq "$2 |= \"$3\"" "$tmpjson" > "$1"
    rm "$tmpjson"
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

bump_command() {
    # Check jq
    if ! which jq 2> /dev/null 1>&2; then
        echo "Please install jq at first" >&2
        echo "https://jqlang.github.io/jq/" >&2
        exit 1
    fi

    # Check arguments
    if [ $# -ne 1 ]; then
        echo "Usage: $0 bump [Ver]" >&2
        exit 1
    fi

    # Change package.json
    echo "Bump version in package.json to $1" >&2
    #pnpm version "$1" --no-git-tag-version --no-commit-hooks
    change_json "$script_path/package.json" ".version" "$1"

    # Change manifest.json

    echo "Bump version in manifest.json to $1" >&2
    for manifest in "$script_path/public/manifest_chrome.json" "$script_path/public/manifest_firefox.json"; do
        change_json "$manifest" ".version" "$1"
    done

    return 0
}

main() {
    _short="" _long="" _noopts="" _cmd="" _cmdargs=""
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
                _noopts="${_noopts-""}${1} "
                shift 1
                ;;
        esac
    done
    eval set -- "${_noopts-""}"
    _cmd="${1-""}"
    shift 1 || true
    case "${_cmd-""}" in
        "init")
            init_command "$@"
            shift 1
            ;;
        "bump")
            bump_command "$@"
            shift 1
            ;;
        "help")
            print_usage
            shift 1
            exit 0
            ;;
        "")
            echo "No command specified" >&2
            print_usage >&2
            exit 1
            ;;
        *)
            _cmdargs="${_cmdargs-""}${1} "
            shift 1
            ;;
    esac
    eval set -- "${_cmdargs-""}"
}

main "$@"
