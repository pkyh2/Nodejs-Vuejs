const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
});

// module.exports = {
// 	dnsServer: {
// 		proxy: {
// 			'/api': {
// 				target: 'http://localhost:3000'
// 			}
// 		}
// 	}


// }