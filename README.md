# Consumer Data Standards Redocs

This repository contains a [Redoc](https://github.com/Redocly/redoc) implementation of the [Consumer Data Standards](https://consumerdatastandardsaustralia.github.io/standards) governing the [Consumer Data Right](https://www.accc.gov.au/focus-areas/consumer-data-right-cdr-0).

The result of this repository is published at [https://bizaio.github.io/dsb-standards/](https://bizaio.github.io/dsb-standards/).

## Current Status

We believe this documentation is currently up to date with **1.3.1** of the Standards with respect to the payloads.

We have not currently transferred auxiliary documentation outside of payloads.

## Enhancements

We have utilised the additional features OpenAPI 3 delivers to provide enhancements over and above the published Standards. These include:

- Use of `oneOf` notation providing for the describing of version based responses
- Use of `allOf` for compound definitions
- String `format` entries to provide hints of string type

## Maintainers

[Biza Pty Ltd](https://biza.io/) are currently the primary maintainers of this repository and will endeavour to keep it up to date with the upstream specifications.

