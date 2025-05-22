function FindProxyForURL(url, host) {
    // Configuración de proxies para cada dominio
    var proxies = {
      
        "artlist.io": "PROXY 45.170.253.190:50100",
        "motionarray.com": "PROXY 45.170.253.190:50100",
        "elements.envato.com": "PROXY 45.170.253.190:50100"
    };

    // Verifica si el host coincide con un dominio en la lista
    for (var dominio in proxies) {
        if (
            dnsDomainIs(host, dominio) || 
            dnsDomainIs(host, "." + dominio) // Incluye subdominios
        ) {
            return proxies[dominio];
        }
    }

    // Conexión directa para otros sitios
    return "DIRECT";
}