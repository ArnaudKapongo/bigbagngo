export default {
    port: 8000,
    host: "localhost",
    dbUri: "mongodb+srv://kapongoarnaud:shadowhearts77@cluster0.w5i3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    privateKey: `
    -----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQCx5qeCTR9TARzS9DeQxfNICvWhMRJY0XmKRjiRhZOJYvhU15pz
    81sXetgcDJvsF8HRLPpHE341hUDKnRkvI4vdUTKKkSUbjB/Hln4mqGt6ejix7W7+
    BZEo4dmlt30fsYz/jnDj6U2yBIjDb6ECpPYOy2xNciSsFdmBtwcq47ZLbQIDAQAB
    AoGBAJ+tsFy8bIlMTlrq6ZUAmETp0V9FdHpUSwtZzBySEMMYGl3Mx82beP+yO5ex
    maJoEId4H4z8aiQP3v/90kUFWttkdvsMhZro44jTKsIQBE1UOQie+Il61owf7356
    oYOxKqxjIgBEvTccM9oGL9rOyeGvut8cEdFo3RQuQdnNz/4BAkEA2rAyWwfnTJpX
    nk1l0Os/a0c0iJG5MvHmtfXmhePqSXNWDYoyFxe8JuCMMrbqb53oFNyVPHqBk/Ma
    w70JhvazEQJBANBA9nfpttBKsiABCHIW/oveh2vAt83r/zFOHaO5dIz6Kh9R17TE
    g5gv1Kpvv28nIO08sGpfJi244ETEVU8O2p0CQBcJqMReOMehGsnabXds0OmEPsyE
    TXZIdX2Fwhsov22tcMtMW6qDHZca4KoXCutnPyOzeSU94pira45jQ7WsF4ECQHAv
    DpZ6KCj8lAf5hnsvN+BQ99Jr9pfPUaFV21GfTdHD0X0dsX2Hfvw0h/NoT0+pXGtw
    Dfi/WOm4ddeVi/8SmWECQE295DvvdH3C/VlhkS5fPxH/IS71oe96JlOKJc9KYPHS
    mg5Xo1YekOAWI1kb+Y6JI5hQkRv5eYB8m3PI2hUJuas=
    -----END RSA PRIVATE KEY-----
    `,
};