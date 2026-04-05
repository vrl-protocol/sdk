# VRL Go SDK

A complete Go SDK for the Verifiable Reality Layer (VRL) proof bundle specification.

## Installation

```bash
go get github.com/vrl-protocol/sdk/sdk/go
```

## Quick Start

```go
package main

import (
	"fmt"
	"github.com/vrl-protocol/sdk/sdk/go/vrl"
)

func main() {
	builder := vrl.NewBuilder()
	fmt.Println(builder)
}
```

## Development

```bash
go test ./...
```

## Project Links

- Source: https://github.com/vrl-protocol/sdk
- Specification: https://github.com/vrl-protocol/spec
- Registry: https://github.com/vrl-protocol/registry

## License

MIT
