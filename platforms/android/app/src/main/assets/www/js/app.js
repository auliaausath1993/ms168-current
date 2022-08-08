var shop_name = "Emarket Batam"; // NAMA TOKO ONLINE
var domain_api = "emarketbatam.com";
var token_api = "8abf4902a0db27dcb7f62a01c2fd0d0a";

var domain = 'https://' + domain_api + '/mobile/'; // DOMAIN URL ADMIN
var admin_url = domain;
var topics = domain_api.replace('.', '');
var base_url_api = "https://api.tokomobile.co.id/ongkir/development/api";
//=========================================================================//

var base_url = domain+"_api_/android_dev/"; // URL API
var base_url_media = admin_url+"media"; // DIREKTORI PENYIMPANAN IMAGE DI HOSTING
var token = token_api; // ISI DENGAN TOKEN
var headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
//----------------------//

var loading = '<ion-spinner icon="android"></ion-spinner>';

var page = 1;
var page_pesanan = 1;
var page_pesan = 1;
var category = "all";
var message_notif = "";
var idx = 0;


function toRp(a,b,c,d,e) {e=function(f) {return f.split('').reverse().join('')};b=e(parseInt(a,10).toString());for (c=0,d='';c<b.length;c++) {d+=b[c];if ((c+1)%3===0&&c!==(b.length-1)) {d+='.';}}return'\t'+e(d)+',00'}

function check_token() {
	alert('Invalid Token');
	window.location = "#/login";
	return false;
}

function check_status_aplikasi(message) {
	message_notif = message;
	window.location = "#/notifikasi";
	return false;
}

function check_status_member() {
	message_notif = "Status member anda tidak aktif";
	localStorage.setItem('status_member', 'Inactive');
	if (localStorage.getItem('langsung_dashboard') === 'OFF') {
		window.location = "#/notifikasi";
		return false;
	}
}

function check_status_member_not_found() {
	message_notif = "Member Not Found";
	window.location = "#/notifikasi";
	return false;
}



angular.module('starter', ['ionic','ionicLazyLoad','ngCordova','ionic-autocomplete', 'angular.filter', 'monospaced.elastic', 'ngclipboard', 'ionic.native'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
	$ionicConfigProvider.tabs.position('bottom');
	$stateProvider
	.state('startup', {
		url: '/startup',
		templateUrl: 'templates/startup.html',
		controller: 'startupController'
	})

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	})

	.state('register', {
		url: '/register',
		templateUrl: 'templates/register.html',
		controller: 'registerController'
	})

	.state('activation', {
		url: '/activation',
		templateUrl: 'templates/activation.html',
		controller: 'activationController'
	})

	.state('forget', {
		url: '/forget',
		templateUrl: 'templates/forget.html',
		controller: 'forgetController'
	})

	.state('eventmenu.login', {
		url: '/login',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/login.html',
				controller: 'loginController'
			},
			'menuContent' :{
				templateUrl: 'templates/login.html',
				controller: 'loginController'
			}
		}
	})
	.state('eventmenu.forget', {
		url: '/forget',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/forget.html',
				controller: 'forgetController'
			},
			'menuContent' :{
				templateUrl: 'templates/forget.html',
				controller: 'forgetController'
			}
		}
	})
	.state('eventmenu.register', {
		url: '/register',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/register.html',
				controller: 'registerController'
			},
			'menuContent' :{
				templateUrl: 'templates/register.html',
				controller: 'registerController'
			}
		}
	})
	.state('eventmenu.activation', {
		url: '/activation',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/activation.html',
				controller: 'activationController'
			},
			'menuContent' :{
				templateUrl: 'templates/activation.html',
				controller: 'activationController'
			}
		}
	})
	.state('notifikasi', {
		url: '/notifikasi',
		templateUrl: 'templates/notifikasi.html',
		controller: 'notifikasiController'
	})
	.state('eventmenu', {
		url: '/event',
		abstract: true,
		templateUrl: 'templates/menu.html'
	})
	.state('eventmenu.dashboard', {
		url: '/dashboard',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/dashboard.html'
			},
			'menuContent' :{
				templateUrl: 'templates/dashboard.html'
			}
		}
	})
	.state('eventmenu.login_inside', {
		url: '/login_inside',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/login.html'
			},
			'menuContent' :{
				templateUrl: 'templates/login.html'
			}
		}
	})
	.state('eventmenu.dashboardCategory', {
		url: '/dashboardCategory',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/dashboardCategory.html'
			},
			'menuContent' :{
				templateUrl: 'templates/dashboardCategory.html'
			}
		}
	})
	.state('eventmenu.detailbarang', {
		url: '/detailbarang',
		views: {
			'dashboard-tab' : {
				templateUrl: 'templates/detailbarang.html',
				controller : 'detailBarangController'
			},
			'menuContent' :{
				templateUrl: 'templates/detailbarang.html',
				controller : 'detailBarangController'
			}
		}
	})
	.state('eventmenu.listpesananbarang', {
		url: '/listpesananbarang',
		views: {
			'pesanan-tab' : {
				templateUrl: 'templates/listpesananbarang.html'
			},
			'menuContent' :{
				templateUrl: 'templates/listpesananbarang.html'
			}
		}
	})
	.state('eventmenu.rekap', {
		url: '/rekap',
		views: {
			'menuContent' :{
				templateUrl: 'templates/rekap.html'
			},
			'pesanan-tab' : {
				templateUrl: 'templates/rekap.html'
			},
		}
	})
	.state('eventmenu.dropship1', {
		url: '/dropship1',
		views: {
			'menuContent' :{
				templateUrl: 'templates/dropship1.html'
			},
			'pesanan-tab' : {
				templateUrl: 'templates/dropship1.html'
			},
		}
	})
	.state('eventmenu.dropship', {
		url: '/dropship',
		views: {
			'menuContent' :{
				templateUrl: 'templates/dropship.html'
			},
			'pesanan-tab' : {
				templateUrl: 'templates/dropship.html'
			},
		}
	})
	.state('eventmenu.dropship2', {
		url: '/dropship2',
		views: {
			'menuContent' :{
				templateUrl: 'templates/dropship2.html'
			},
			'pesanan-tab' : {
				templateUrl: 'templates/dropship2.html'
			},
		}
	})
	.state('eventmenu.datapesanan', {
		url: '/datapesanan',
		views: {
			'pesanan-tab' : {
				templateUrl: 'templates/datapesanan.html'
			},
			'menuContent' :{
				templateUrl: 'templates/datapesanan.html'
			}
		}
	})
	.state('eventmenu.listdatapesanan', {
		url: '/listdatapesanan',
		views: {
			'pesanan-tab' : {
				templateUrl: 'templates/listdatapesanan.html'
			},
			'menuContent' :{
				templateUrl: 'templates/listdatapesanan.html'
			}
		}
	})
	.state('eventmenu.resi', {
		url: '/resi',
		views: {
			'pesanan-tab' : {
				templateUrl: 'templates/resi.html'
			},
			'menuContent' :{
				templateUrl: 'templates/resi.html'
			}
		}
	})
	.state('eventmenu.listdatadetailpesanan', {
		url: '/listdatadetailpesanan',
		views: {
			'menuContent' :{
				templateUrl: 'templates/listdatadetailpesanan.html'
			},
			'pesanan-tab' : {
				templateUrl: 'templates/listdatadetailpesanan.html'
			},
		}
	})
	.state('eventmenu.listdropship', {
		url: '/list-dropship',
		views: {
			'menuContent' :{
				templateUrl: 'templates/list-dropship.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/list-dropship.html'
			},
		}
	})
	.state('eventmenu.orderstatus', {
		url: '/order-status',
		views: {
			'menuContent' :{
				templateUrl: 'templates/order-status.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/order-status.html'
			},
		}
	})
	.state('eventmenu.konfirmasipembayaran', {
		url: '/konfirmasipembayaran',
		views: {
			'menuContent' :{
				templateUrl: 'templates/konfirmasipembayaran.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/konfirmasipembayaran.html',
			},
		}
	})
	.state('eventmenu.kotakmasuk', {
		url: '/kotakmasuk',
		views: {
			'menuContent' :{
				templateUrl: 'templates/kotakmasuk.html'
			},
			'info-tab' : {
				templateUrl: 'templates/kotakmasuk.html'
			},
		}
	})
	.state('eventmenu.inforekening', {
		url: '/inforekening',
		views: {
			'menuContent' :{
				templateUrl: 'templates/inforekening.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/inforekening.html'
			},
		}
	})
	.state('eventmenu.pengaturan', {
		url: '/pengaturan',
		views: {
			'profil-tab' : {
				templateUrl: 'templates/pengaturan.html'
			},
			'menuContent' :{
				templateUrl: 'templates/pengaturan.html'
			}
		}
	})
	.state('eventmenu.editprofil', {
		url: '/editprofil',
		views: {
			'profil-tab' :{
				templateUrl: 'templates/editprofil.html'
			},
			'menuContent' :{
				templateUrl: 'templates/editprofil.html'
			}
		}
	})
	.state('eventmenu.update', {
		url: '/update',
		views: {
			'menuContent' :{
				templateUrl: 'templates/update.html'
			}
		}
	})
	.state('eventmenu.pesanmasukdetail', {
		url: '/pesanmasukdetail',
		views: {
			'menuContent' :{
				templateUrl: 'templates/pesanmasukdetail.html'
			},
			'info-tab' : {
				templateUrl: 'templates/pesanmasukdetail.html'
			},
		}
	})
	.state('eventmenu.chatting', {
		cache: false,
		url: '/chatting',
		views: {
			'menuContent' :{
				templateUrl: 'templates/chatting.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/chatting.html'
			},
		}
	})
	.state('eventmenu.listChatProduct', {
		cache: false,
		url: '/listChatProduct',
		views: {
			'menuContent' :{
				templateUrl: 'templates/listChatProduct.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/listChatProduct.html'
			},
		}
	})
	.state('eventmenu.chatProduct', {
		cache: false,
		url: '/chatProduct',
		views: {
			'menuContent' :{
				templateUrl: 'templates/chatProduct.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/chatProduct.html'
			},
		}
	})
	.state('eventmenu.dashboardSearch', {
		cache: true,
		url: '/dashboardSearch',
		views: {
			'menuContent' :{
				templateUrl: 'templates/dashboardSearch.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/dashboardSearch.html'
			},
		}
	})
	.state('eventmenu.cekongkir', {
		url: '/cekongkir',
		views: {
			'menuContent' :{
				templateUrl: 'templates/cekongkir.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/cekongkir.html'
			},
		}
	})
	.state('eventmenu.cekongkirdetail', {
		url: '/cekongkirdetail',
		views: {
			'menuContent' :{
				templateUrl: 'templates/cekongkirdetail.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/cekongkirdetail.html'
			},
		}
	})
	.state('eventmenu.address', {
		url: '/address',
		views: {
			'menuContent' :{
				templateUrl: 'templates/address.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/address.html'
			},
		}
	})
	.state('eventmenu.addAddress', {
		url: '/add-address',
		views: {
			'menuContent' :{
				templateUrl: 'templates/add-address.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/add-address.html'
			},
		}
	})
	.state('eventmenu.editAddress', {
		url: '/edit-address/:id',
		views: {
			'menuContent' :{
				templateUrl: 'templates/edit-address.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/edit-address.html'
			},
		}
	})
	.state('eventmenu.faq', {
		url: '/faq',
		views: {
			'menuContent' :{
				templateUrl: 'templates/faq.html'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/faq.html'
			},
		}
	})
	.state('eventmenu.cara_order', {
		url: '/cara_order',
		views: {
			'menuContent' :{
				templateUrl: 'templates/cara_order.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/cara_order.html'
			},
		}
  })
  .state('eventmenu.cara_order_detail', {
		url: '/cara_order_detail',
		views: {
			'menuContent' :{
				templateUrl: 'templates/cara_order_detail.html'
			},
			'profil-tab' : {
				templateUrl: 'templates/cara_order_detail.html'
			},
		}
	})
	.state('eventmenu.kategori', {
		url: '/kategori',
		views: {
			'menuContent' :{
				templateUrl: 'templates/kategori.html',
				controller : 'kategoriController'
			},
			'katalog-tab' : {
				templateUrl: 'templates/kategori.html',
				controller : 'kategoriController'
			},
		}
	})
	.state('eventmenu.katalogPreOrder', {
		url: '/katalogPreOrder',
		views: {
			'menuContent' :{
				templateUrl: 'templates/katalogPreOrder.html',
				controller : 'katalogPreOrderController'
			},
			'dashboard-tab' : {
				templateUrl: 'templates/katalogPreOrder.html',
				controller : 'katalogPreOrderController'
			},
		}
	})
	.state('eventmenu.detailKatalog', {
		url: '/detailbarang',
		views: {
			'katalog-tab' : {
				templateUrl: 'templates/detailbarang.html',
				controller : 'detailKatalogController'
			},
			'menuContent' :{
				templateUrl: 'templates/detailbarang.html',
				controller : 'detailKatalogController'
			}
		}
	})
	$urlRouterProvider.otherwise('/startup');
})

.run(function($ionicPlatform, $ionicLoading, $rootScope, $state, $ionicPopup, $ionicHistory, $http, productService, dataMessageService, dataPesananService) {
	$rootScope.shop_name = shop_name;

	var link = base_url + 'check_app_version';
	$http({ method  : 'GET', url     : link, data    : {}, timeout : 25000 })
	.then(function(res) {
		window.localStorage['number_version'] = 29;

		if (typeof window.localStorage['number_version'] === "undefined") {
			window.localStorage['number_version'] = res.data.number_version;
		} else if (window.localStorage['number_version'] < res.data.number_version) {
			var confirmPopup = $ionicPopup.confirm({
				title      : 'Notifikasi',
				template   : 'Tersedia versi terbaru aplikasi, silahkan download versi terbaru untuk melanjutkan',
				cancelText : 'Keluar',
				okText     : 'Update'
			});

			confirmPopup.then(function(x) {
				if (x) {
					window.open(res.data.link,"_system","location=yes,enableViewportScale=yes,hidden=no");
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				} else {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		}

		var customer_id = localStorage.getItem('customer_id');
		localStorage.setItem('langsung_dashboard', res.data.langsung_dashboard);
		$rootScope.no_wa = res.data.no_wa;
		if (res.data.langsung_dashboard == 'OFF' && customer_id == null) {
			$state.go('login');
		}
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$ionicPlatform.ready(function() {
		FCMPlugin.subscribeToTopic(topics);
		FCMPlugin.getToken(
			function(token) {
				window.localStorage['registration_id'] = token;
				if (window.localStorage['customer_id'] != null) {
					var link = base_url + 'registering_fcm/' + token + '/' + window.localStorage['customer_id'];
					$http({
						method  : 'POST',
						url     : link,
						data    : {},
						timeout : 25000
					}).then(
					function(res) {
						if (res.data.logout) {
							localStorage.clear();
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							document.location.href = 'index.html';
						}
					}, function(response) {
						$ionicLoading.hide();
						alert('Failed to continue, please check your internet connection');
					});
				}
			}, function(err) {
				console.log('error retrieving token: ' + err);
			}
		)
		FCMPlugin.onNotification(
			function(data) {
				var langsung_dashboard = localStorage.getItem('langsung_dashboard');
				if (langsung_dashboard === 'OFF') {
					return;
				}
				var alertPopup = $ionicPopup.alert({
					title: data.title,
					template: data.text
				});
				if (data.wasTapped) {
					if (data.type == 'chat') {
						alertPopup.then(function(res) {
							$state.go('eventmenu.chatting',{}, {reload: true});
						})
					} else if (data.type == 'produk') {
						alertPopup.then(function(res) {
							productService.selectedProduct = data.id_produk;
							$state.go('eventmenu.detailbarang');
						});
					} else if (data.type == 'pesan') {
						alertPopup.then(function(res) {
							dataMessageService.selectedMessageId = data.id_pesan;
							$state.go('eventmenu.pesanmasukdetail');
						});
					} else if (data.type == 'chat_product') {
						alertPopup.then(function(res) {
							productService.product_id = data.id_produk;
							$state.go('eventmenu.chatProduct');
						});
					} else if (data.type == 'order_status') {
						alertPopup.then(function(res) {
							dataPesananService.selectedPesananID = data.id_pesan;
							$state.go('eventmenu.listdatadetailpesanan');
						});
					} else if (data.type == 'login') {
						alertPopup.then(function(res) {
							localStorage.clear();
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							document.location.href = 'index.html';
						});
					}
				} else {
					if (data.type == 'chat') {
						alertPopup.then(function(res) {
							$state.go('eventmenu.chatting',{}, {reload: true});
						})
					} else if (data.type == 'produk') {
						alertPopup.then(function(res) {
							productService.selectedProduct = data.id_produk;
							$state.go('eventmenu.detailbarang');
						});
					} else if (data.type == 'pesan') {
						alertPopup.then(function(res) {
							dataMessageService.selectedMessageId = data.id_pesan;
							$state.go('eventmenu.pesanmasukdetail');
						});
					} else if (data.type == 'chat_product') {
						alertPopup.then(function(res) {
							productService.product_id = data.id_produk;
							$state.go('eventmenu.chatProduct');
						});
					} else if (data.type == 'order_status') {
						alertPopup.then(function(res) {
							dataPesananService.selectedPesananID = data.id_pesan;
							$state.go('eventmenu.listdatadetailpesanan');
						});
					} else if (data.type == 'login') {
						alertPopup.then(function(res) {
							localStorage.clear();
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							document.location.href = 'index.html';
						});
					}
				}
			},
			function(msg) {
				console.log('onNotification callback successfully registered: ' + msg);
			},
			function(err) {
				console.log('Error registering onNotification callback: ' + err);
			}
		);
	});

	$rootScope.cancel = function() {
		$ionicLoading.hide();
	}

	$rootScope.shop_name = shop_name;
	$rootScope.tipe_customer = 'Customer '+window.localStorage['customer_type'];
	$rootScope.customer_name = window.localStorage['customer_name'];
	$rootScope.customer_id = window.localStorage['customer_id'];

	$ionicPlatform.registerBackButtonAction(function(event) {

		if ($state.current.name == 'eventmenu.dashboard') {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Konfirmasi',
				template: 'Anda yakin ingin keluar aplikasi ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		} else if ($state.current.name == 'login') {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Konfirmasi',
				template: 'Anda yakin ingin keluar aplikasi ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		} else if ($state.current.name == 'notifikasi') {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Konfirmasi',
				template: 'Anda yakin ingin keluar aplikasi ?'
			});

			confirmPopup.then(function(res) {
				if (res) {
					window.close();
					ionic.Platform.exitApp();
					navigator.app.exitApp();
				}
			});
		} else if ($state.current.name == 'eventmenu.dashboardCategory') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			productService.category = 'all';
			productService.page = 1;
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.listpesananbarang') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.datapesanan') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.listdatapesanan') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.konfirmasipembayaran') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.kotakmasuk') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.inforekening') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.pengaturan') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.update') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.register') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.chatting') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.dashboardSearch') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.cekongkir') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.katalogAll') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else if ($state.current.name == 'eventmenu.faq') {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard');
		} else{
			page = 1;
			$ionicHistory.goBack();
		}
	}, 100);
})

//SERVICE
.service('productService', function() {
	this.productService;
})
.service('dataPesananService', function() {
	this.dataPesananService;
})
.service('dataMessageService', function() {
	this.dataMessageService;
})
.service('listPesananService', function() {
	this.listPesananService;
})
.service('searchProductService', function() {
	this.searchProductService;
})
.service('dataService', function() {
	this.dataService;
})

.factory('member', function($ionicPopup, $ionicHistory, $state) {
	return {
		checkMember : function() {
			if (localStorage.getItem('status_member') != 'Active') {
				$ionicPopup.alert({
					title: "Alert",
					template: 'User belum aktif, hubungi Admin untuk aktivasi',
					buttons: [{
						text: 'OK',
						type: 'button-default',
						onTap: function(e) {
							$ionicHistory.clearCache().then(function() {
								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								$state.go('eventmenu.dashboard', {}, {reload: true});
							});
						}
					}]
				});
			}
		}
	};
})

//CONTROLLER
.controller('startupController', function($scope, $state, $http, $ionicLoading, $window) {
	var customer_id = $window.localStorage['customer_id'];

	if (typeof customer_id === 'undefined') {
		$state.go('eventmenu.dashboard');
	} else {
		$state.go('eventmenu.dashboard');
	}
})

.controller('loginController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $window, dataService, $rootScope) {

	$scope.postData = {};
	$scope.login = function() {
		$ionicLoading.show({
			template: loading,
			cancelable : true
		})
		var link = base_url + 'login';
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:$scope.postData.customer_id,
				password:$scope.postData.password,
				token:token,
				registration_id :window.localStorage['registration_id']
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.response = res.data;

			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}

			if (res.data.status == 'OFF') {
				check_status_aplikasi(data.message);
			}

			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			var buttons = [{
				text: 'OK',
				type: 'button-positive'
			}];

			var langsung_dashboard = localStorage.getItem('langsung_dashboard');
			if (res.data.kirim_otp) {
				dataService.email = res.data.email;
				dataService.customer_id = res.data.customer_id;
				if (langsung_dashboard === 'ON') {
					$state.go('eventmenu.activation');
				} else {
					$state.go('activation');
				}
			} else if (res.data.status == "Success" && !res.data.kirim_otp) {
				$window.localStorage['customer_id']    = res.data.customer_id;
				$window.localStorage['customer_email'] = res.data.customer_email;
				$window.localStorage['customer_name']  = res.data.customer_name;
				$window.localStorage['jenis_customer'] = res.data.jenis_customer;
				$window.localStorage['prov_id']        = res.data.prov_id;
				$window.localStorage['kota_id']        = res.data.kota_id;
				$window.localStorage['kecamatan_id']   = res.data.kecamatan_id;
				$window.localStorage['notif']   = res.data.notif;
				$window.localStorage['status_member']   = res.data.status_member;
				document.location.href = 'index.html';
				$timeout( function() {
					$window.location.reload(true);
				}, 1000);
			} else {
				if (langsung_dashboard === 'OFF') {
					var button = {
						text: 'Chat Admin',
						type: 'button-balanced',
						onTap: function() {
							var link = 'https://wa.me/62' + $rootScope.no_wa;
							window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
						}
					}
					buttons.unshift(button);
				}
				$ionicPopup.alert({
					title: res.data.status,
					template: res.data.error,
					buttons: buttons
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};

	var langsung_dashboard = localStorage.getItem('langsung_dashboard');
	$scope.register = function() {
		if (langsung_dashboard == 'ON') {
			$state.go('eventmenu.register');
		} else {
			$state.go('register');
		}
	}

	$scope.forget = function() {
		if (langsung_dashboard == 'ON') {
			$state.go('eventmenu.forget');
		} else {
			$state.go('forget');
		}
	}
})
.controller('registerController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $ionicHistory, dataService) {
	$scope.postData = {
		name: '',
		email: '',
		phone: '',
		password: '',
		confirm_password: ''
	};

	$ionicHistory.nextViewOptions({
		disableBack: false
	});

	$scope.langsung_dashboard = localStorage.getItem('langsung_dashboard');

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	$scope.submit_register = function () {
		var nama = $scope.postData.nama;
		var email = $scope.postData.email;
		var phone = $scope.postData.phone;
		var password = $scope.postData.password;
		var confirm_password = $scope.postData.confirm_password;

		var message = '';
		if (!nama) {
			message = 'Nama harus diisi';
		} else if (!email) {
			message = 'Email harus diisi';
		} else if (!validateEmail(email)) {
			message = 'Email tidak valid';
		} else if (!phone) {
			message = 'No. Telepon harus diisi';
		} else if (!password) {
			message = 'Password harus diisi';
		} else if (!confirm_password) {
			message = 'Konfirmasi password harus diisi';
		} else if (password !== confirm_password) {
			message = 'Password dan konfirmasi password tidak sesuai'
		}

		if (message) {
			$ionicPopup.alert({
				title: 'Info',
				template: message,
			});
			return;
		}

		$ionicLoading.show();
		var link = base_url + 'register_v2';

		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id: localStorage.getItem('customer_id'),
				token: token,
				nama: nama,
				email: email,
				phone: phone,
				password: password
			},
			timeout: 25000
		}).then(
		function(res) {
			/* check */
			if (res.data.desc == 'Invalid Token') {
				check_token();
			}

			if (res.data.desc == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.desc == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.desc == 'Member Not Active') {
				check_status_member();
			}
			/* end check */

			if (res.data.status == 'Success') {
				localStorage.setItem('customer_id', res.data.customer_id);
				localStorage.setItem('customer_email', res.data.customer_email);
				localStorage.setItem('customer_name', res.data.customer_name);
				localStorage.setItem('jenis_customer', res.data.jenis_customer);
				localStorage.setItem('prov_id', res.data.prov_id);
				localStorage.setItem('kota_id', res.data.kota_id);
				localStorage.setItem('kecamatan_id', res.data.kecamatan_id);
				localStorage.setItem('status_member', 'Moderate');
				$ionicLoading.hide();
				var confirmPopup = $ionicPopup.alert({
					title: res.data.status,
					template: res.data.message
				});

				confirmPopup.then(function(res) {
					if (res) {
						dataService.email = email;
						$state.go('eventmenu.activation');
					}
				});
			} else {
				$ionicLoading.hide();
				$ionicPopup.alert({
					title: res.data.status,
					template: res.data.error
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('activationController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $ionicHistory, dataService, $rootScope) {
	$scope.postData = {
		otp_code: '',
	}

	$ionicHistory.nextViewOptions({
		disableBack: false
	});

	$scope.checkOtp = function () {
		$ionicLoading.show();
		var link = base_url + 'checkOtp';

		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id: dataService.customer_id,
				token: token,
				otp_code: $scope.postData.otp_code
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.desc == 'Invalid Token') {
				check_token();
			}

			if (res.data.desc == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.desc == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.desc == 'Member Not Active') {
				check_status_member();
			}
			/* end check */
			var langsung_dashboard = localStorage.getItem('langsung_dashboard');
			if (res.data.status == 'Success') {
				var buttons = [{
					text: 'OK',
					type: 'button-positive'
				}];
				if (langsung_dashboard === 'ON') {
					var template = res.data.message;
					$ionicHistory.clearCache().then(function() {
						$ionicHistory.nextViewOptions({
							disableBack: true
						});
						$state.go('eventmenu.dashboard', {}, {reload: true});
					});
				} else {
					var template = 'Silakan hubungi Admin untuk aktivasi melalui tombol dibawah ini';
					var button = {
						text: 'Chat Admin',
						type: 'button-balanced',
						onTap: function() {
							var link = 'https://wa.me/62' + $rootScope.no_wa;
							window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
						}
					}
					buttons.unshift(button);
				}
				$ionicPopup.alert({
					title: res.data.status,
					template: template,
					buttons: buttons
				});
			} else {
				$ionicPopup.alert({
					title: res.data.status,
					template: res.data.message,
				});
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.resendOtp = function() {
		$ionicLoading.show();
		var link = base_url + 'resendOtp';

		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id: dataService.customer_id,
				token: token,
				email: dataService.email,
			},
			timeout: 25000
		}).then(function(res) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: res.data.status,
				template: res.data.message
			});
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})

.controller('menuController', function($ionicHistory, $scope, $state, $http, $ionicLoading, $ionicSideMenuDelegate, $window, $rootScope,  productService, dataPesananService, $ionicPopup) {

	$scope.customer_id = localStorage.getItem('customer_id');

	$scope.toDashboard = function() {
		$ionicHistory.clearCache().then(function() {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});

			$state.go('eventmenu.dashboard', {}, {reload: true});
		});
	}

	$scope.toProfil = function() {
		if ($scope.customer_id === undefined) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Anda Belum Register Member !!',
				buttons: [{
					text: 'OK',
					type: 'button-default',
					onTap: function(e) {
						$state.go('eventmenu.login');
					}
				}]
			});
		} else {
			$state.go('eventmenu.pengaturan', {}, { reload : true });
		}
	}

	$scope.toInbox = function() {
		if ($scope.customer_id === undefined) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Anda Belum Register Member !!',
				buttons: [{
					text: 'OK',
					type: 'button-default',
					onTap: function(e) {
						$state.go('eventmenu.login');
					}
				}]
			});
		} else {
			$state.go('eventmenu.kotakmasuk', {}, { reload : true });
		}
	}

	$scope.toDataPesanan = function() {
		if ($scope.customer_id === undefined) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Anda Belum Register Member !!',
				buttons: [{
					text: 'OK',
					type: 'button-default',
					onTap: function(e) {
						$state.go('eventmenu.login');
					}
				}]
			});
		} else {
			$state.go('eventmenu.listdatapesanan', {}, { reload : true });
		}
	}

	$scope.postData = {};
	$scope.cari_produk = function() {
		$rootScope.katalog = [];
		$rootScope.searchPage = 1;
		$ionicLoading.show();
		$http({
			method  : 'POST',
			url     : base_url + 'get_search_product_v2',
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token,
				q           : $scope.postData.keyword,
				page        : 1,
			},
			timeout: 25000
		}).then(
		function(res) {
			$scope.status = res.data.status;
			if (res.data.status == 'Success') {
				$ionicLoading.hide();
				$rootScope.keyword = $scope.postData.keyword;
				$rootScope.katalog = res.data.product;
				$rootScope.moredataSearch = $rootScope.katalog.length < parseInt(res.data.total_product);
			} else {
				$ionicLoading.hide();
				$rootScope.keyword = $scope.postData.keyword;
				$rootScope.katalog = [];
				$ionicPopup.alert({
					title: 'Alert',
					template: 'Hasil Pencarian Tidak Ditemukan'
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
		$state.go('eventmenu.dashboardSearch');
	};

	$scope.$on('new-order', function(event, args) {
		var anyThing = args.any.total_cart;
		$rootScope.total_cart = anyThing;
	});

	$scope.customer_name  = $window.localStorage['customer_name'];
	$scope.customer_id    = $window.localStorage['customer_id'];
	$scope.customer_email = $window.localStorage['customer_email'];
	$scope.customer_phone = $window.localStorage['customer_phone'];

	$ionicLoading.show();
	var link = base_url + 'get_cart_total';
	$http({
		method  : 'POST',
		url     : link,
		data    : {
			customer_id : $scope.customer_id,
			token       : token
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide()
		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		/* end check */

		total_cart = res.data.total_cart;
		$rootScope.total_cart = total_cart;
		$rootScope.total_message = res.data.total_message;
		$rootScope.total_chat = res.data.total_chat;
		$rootScope.total_chat_product = res.data.total_chat_product;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.search = false;
	$scope.showSearch = function(search) {
		if (search == false) {
			$scope.search = true;
		} else {
			$scope.search = false;
		}
	}

	$scope.toConfirm = function() {
		$state.go('eventmenu.konfirmasipembayaran');
		dataPesananService.other_order_id = false;
	}

	$scope.setJenisPesanan = function() {
		dataPesananService.jenisPesanan = "Unpaid";
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$ionicHistory.clearCache().then(function() {
			$state.go('eventmenu.listdatapesanan');
		});
	}

	if (localStorage.getItem('customer_id') != null) {
		$scope.sidemenu = [
			{ id: 0 , name : 'Home', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'allCategory()'},
			{ id: 1 , name : 'Kategori Produk', icon : 'icon ion-android-menu', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide()'},
			{ id: 6 , name : 'Pre-Order', icon : 'icon ion-android-menu', target : '#/event/katalogPreOrder', status : 'enabled', click : ''},
			{ id: 2 , name : 'Keranjang Pesanan', icon : 'icon ion-android-list', target : '#/event/listpesananbarang', status : 'enabled', click : ''},
			{ id: 3 , name : 'Data & Histori Pesanan', icon : 'icon ion-document-text', target : '#', status : 'enabled', click : 'setJenisPesanan()'},
			{ id: 5 , name : 'Konfirmasi Pembayaran', icon : 'icon ion-checkmark-circled', target : '#', status : 'enabled', click : 'toConfirm()'},
			{ id: 5 , name : 'Resi', icon : 'icon ion-filing', target : '#/event/resi', status : 'enabled', click : ''},
			{ id: 6 , name : 'Cek Ongkir', icon : 'icon ion-email-unread', target : '#/event/cekongkir', status : 'enabled', click : ''},
			{ id: 7 , name : 'Customer Service Support', icon : 'icon ion-email-unread', target : '#/event/chatting', status : 'enabled', click : '',badge:true},
			{ id: 11 , name : 'Chat Product', icon : 'icon ion-chatbubbles', target : '#/event/listChatProduct', status : 'enabled', click : '',badge:true },
			{ id: 8 , name : 'Inbox', icon : 'icon ion-email-unread', target : '#/event/kotakmasuk', status : 'enabled', click : ''},
			{ id: 9 , name : 'Informasi', icon : 'icon ion-person', target : '#/event/inforekening', status : 'enabled', click : ''},
			{ id: 10 , name : 'FAQ', icon : 'icon ion-help', target : '#/event/faq', status : 'enabled', click : ''},
		];
	} else {
		$scope.sidemenu = [
			{ id: 0 , name : 'Home', icon : 'icon ion-android-home', target : '#/event/dashboard' , status : 'enabled', click : 'allCategory()'},
			{ id: 1 , name : 'Kategori Produk', icon : 'icon ion-android-menu', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide()'},
			{ id: 6 , name : 'Pre-Order', icon : 'icon ion-android-menu', target : '#/event/katalogPreOrder', status : 'enabled', click : ''},
			{ id: 6 , name : 'FAQ', icon : 'icon ion-help', target : '#/event/faq', status : 'enabled', click : ''},
			{ id: 8 , name : 'Login', icon : 'icon ion-gear-b', target : '#/event/login', status : 'enabled', click : ''},
		];
	}

	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};

	$scope.menuUtama = function  () {
		if (localStorage.getItem('customer_id') != null) {
			$scope.sidemenu = [
				{ id: 0 , name : 'Home', icon : 'icon ion-ios-home', target : '#/event/dashboard' , status : 'enabled', click : 'allCategory()'},
				{ id: 1 , name : 'Kategori Produk', icon : 'icon ion-android-menu', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide()'},
				{ id: 6 , name : 'Pre-Order', icon : 'icon ion-android-menu', target : '#/event/katalogPreOrder', status : 'enabled', click : ''},
				{ id: 2 , name : 'Keranjang Pesanan', icon : 'icon ion-ios-list', target : '#/event/listpesananbarang', status : 'enabled', click : ''},
				{ id: 3 , name : 'Data & Histori Pesanan', icon : 'icon ion-document-text', target : '#', status : 'enabled', click : 'setJenisPesanan()'},
				{ id: 4 , name : 'Konfirmasi Pembayaran', icon : 'icon ion-checkmark-circled', target : '#', status : 'enabled', click : 'toConfirm()'},
				{ id: 5 , name : 'Resi', icon : 'icon ion-filing', target : '#/event/resi', status : 'enabled', click : ''},
				{ id: 4 , name : 'Cek Ongkir', icon : 'icon ion-email-unread', target : '#/event/cekongkir', status : 'enabled', click : ''},
				{ id: 5 , name : 'Customer Service Support', icon : 'icon ion-email-unread', target : '#/event/chatting', status : 'enabled', click : '',badge:true},
				{ id: 11 , name : 'Chat Product', icon : 'icon ion-chatbubbles', target : '#/event/listChatProduct', status : 'enabled', click : '',badge:true },
				{ id: 6 , name : 'Inbox', icon : 'icon ion-email-unread', target : '#/event/kotakmasuk', status : 'enabled', click : ''},
				{ id: 7 , name : 'Informasi', icon : 'icon ion-person', target : '#/event/inforekening', status : 'enabled', click : ''},
				{ id: 10 , name : 'FAQ', icon : 'icon ion-help', target : '#/event/faq', status : 'enabled', click : ''},
			];
		} else {
			$scope.sidemenu = [
				{ id: 0 , name : 'Home', icon : 'icon ion-ios-home', target : '#/event/dashboard' , status : 'enabled', click : 'allCategory()'},
				{ id: 1 , name : 'Kategori Produk', icon : 'icon ion-android-menu', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide()'},
				{ id: 7 , name : 'Pre-Order', icon : 'icon ion-person', target : '#/event/katalogPreOrder', status : 'enabled', click : ''},
				{ id: 6 , name : 'FAQ', icon : 'icon ion-help', target : '#/event/faq', status : 'enabled', click : ''},
				{ id: 8 , name : 'Login', icon : 'icon ion-gear-b', target : '#/event/login', status : 'enabled', click : ''},
			];
		}
	}

	$scope.kategoriSide = function() {
		$ionicLoading.show();
		$scope.sidemenu = [
		{ id: 0 , name : ' Back', icon : 'icon ion-ios-arrow-back', target : '#' , status : 'enabled', click : 'menuUtama()'}
		];

		var link = base_url+'get_list_product_category';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$scope.category = res.data;
			var json = res.data.category;
			for (var x = 0; x < json.length; x++) {
				$scope.sidemenu.push({
					id      : json[x].id,
					name    : json[x].name,
					icon    : "",
					target  : "",
					status  : "enabled",
					click   : "filterCategory("+json[x].id+",'"+json[x].name+"')"
				});
			}
			$ionicLoading.hide()
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.filterCategory = function (id,name) {
			$ionicSideMenuDelegate.toggleLeft();
			menuUtama();
			category = id;
			page = 1;

			productService.category = id;
			productService.categoryName = name;
			productService.page = page;

			$ionicHistory.clearCache().then(function() {
				$ionicHistory.nextViewOptions({
					disableBack: true
				});
				$state.go('eventmenu.dashboardCategory', {}, {reload: true});
			});
		}

		$scope.allCategory = function () {
			category = "all";
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboard', {}, {reload: true});
		}

		function  menuUtama() {
			if (localStorage.getItem('customer_id') != null) {
				$scope.sidemenu = [
					{ id: 0 , name : 'Home', icon : 'icon ion-ios-home', target : '#/event/dashboard' , status : 'enabled', click : 'allCategory()'},
					{ id: 1 , name : 'Kategori Produk', icon : 'icon ion-android-menu', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide()'},
					{ id: 6 , name : 'Pre-Order', icon : 'icon ion-android-menu', target : '#/event/katalogPreOrder', status : 'enabled', click : ''},
					{ id: 2 , name : 'Keranjang Pesanan', icon : 'icon ion-ios-list', target : '#/event/listpesananbarang', status : 'enabled', click : ''},
					{ id: 3 , name : 'Data & Histori Pesanan', icon : 'icon ion-document-text', target : '#', status : 'enabled', click : 'setJenisPesanan()'},
					{ id: 4 , name : 'Konfirmasi Pembayaran', icon : 'icon ion-checkmark-circled', target : '#', status : 'enabled', click : 'toConfirm()'},
					{ id: 5 , name : 'Resi', icon : 'icon ion-filing', target : '#/event/resi', status : 'enabled', click : ''},
					{ id: 4 , name : 'Cek Ongkir', icon : 'icon ion-email-unread', target : '#/event/cekongkir', status : 'enabled', click : ''},
					{ id: 5 , name : 'Customer Service Support', icon : 'icon ion-email-unread', target : '#/event/chatting', status : 'enabled', click : '',badge:true },
					{ id: 11 , name : 'Chat Product', icon : 'icon ion-chatbubbles', target : '#/event/listChatProduct', status : 'enabled', click : '',badge:true },
					{ id: 6 , name : 'Inbox', icon : 'icon ion-email-unread', target : '#/event/kotakmasuk', status : 'enabled', click : ''},
					{ id: 7 , name : 'Informasi', icon : 'icon ion-person', target : '#/event/inforekening', status : 'enabled', click : ''},
					{ id: 10 , name : 'FAQ', icon : 'icon ion-help', target : '#/event/faq', status : 'enabled', click : ''},
				];
			} else {
				$scope.sidemenu = [
					{ id: 0 , name : 'Home', icon : 'icon ion-ios-home', target : '#/event/dashboard' , status : 'enabled', click : 'allCategory()'},
					{ id: 1 , name : 'Kategori Produk', icon : 'icon ion-android-menu', target : '#/event/dashboard' , status : 'enabled', click : 'kategoriSide()'},
					{ id: 7 , name : 'Pre-Order', icon : 'icon ion-person', target : '#/event/katalogPreOrder', status : 'enabled', click : ''},
					{ id: 10 , name : 'FAQ', icon : 'icon ion-help', target : '#/event/faq', status : 'enabled', click : ''},
					{ id: 8 , name : 'Login', icon : 'icon ion-gear-b', target : '#/event/login', status : 'enabled', click : ''},
				];
			}
		}
	};
})

//DASHBOARD
.controller('katalogController', function($scope, $state, $http, $ionicLoading, $timeout, $ionicPopup, $ionicSlideBoxDelegate, $rootScope, productService, $q, $ionicScrollDelegate) {
	var page = 1;
	$scope.postDataSearch = {};
	$scope.list_image = [];

	$scope.tab = 0;

	$scope.moredata = false;

	$scope.cache_view = true;

	$scope.getCartTotal = function() {
		var link = base_url + 'get_cart_total';
		return $http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		});
	}

	$scope.getDashboardData = function() {
		var link = base_url + 'get_dashboard_data_v2';
		return $http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		});
	}

	$scope.getListProduct = function() {
		var link = base_url + 'get_list_product_v2';
		return $http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				category    : 'all',
				page        : page,
				token       : token
			},
			timeout: 25000
		});
	}

	$ionicLoading.show();
	$q.all([$scope.getCartTotal(), $scope.getDashboardData(), $scope.getListProduct()])
		.then(function(res) {
			var data_cart = res[0].data;
			$ionicLoading.hide();
			if (data_cart.status == 'Invalid Token') {
				check_token();
			}
			if (data_cart.status == 'OFF') {
				check_status_aplikasi(data_cart.message);
			}
			if (data_cart.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (data_cart.status == 'Member Not Active') {
				check_status_member();
			}

			$rootScope.total_cart = data_cart.total_cart;
			$rootScope.total_message = data_cart.total_message;
			$rootScope.total_chat_product = data_cart.total_chat_product;

			var data_dashboard = res[1].data;
			$scope.list_image = data_dashboard.slider;
			$timeout(function() {
				$ionicSlideBoxDelegate.update();
				$ionicSlideBoxDelegate.loop(true);
			},10);

			$rootScope.no_wa = data_dashboard.no_wa;

			$scope.tags = data_dashboard.tags;

			var data_product = res[2].data;
			$scope.katalog = data_product.product;
			if (data_product.status == 'Not_found') {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No Data'
				});
			} else {
				$scope.moredata = $scope.katalog.length < data_product.total_product;
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
    });

    var scroll = document.getElementById('ion-scroll');
    scroll.addEventListener('scroll', function() {
      var toTop = document.getElementById('to-top-dashboard');
      if (scroll.scrollTop > 100) {
        toTop.style.display = 'flex';
      } else {
        toTop.style.display = 'none';
      }
    });
    $scope.toTop = function() {
      $ionicScrollDelegate.scrollTop(true);
    };

	$scope.toWhatsapp = function() {
		var link = 'https://wa.me/62' + $rootScope.no_wa;
		window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
	}

	$scope.slideChanged = function(index) {
		$scope.slideIndex = index;
	};

	$scope.allProduct = function () {
		productService.category = "all";
		page = 1;
		productService.page = page;

		$state.go('eventmenu.dashboardCategory');
	}

	$scope.detailBarang = function  (id) {
		productService.selectedProduct = id;
		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function () {
		return true;
	}
	$scope.loadMoreData = function() {
		$ionicLoading.show();
		page += 1;

		var link = base_url+'get_list_product_v2';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				category    : 'all',
				page        : page,
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			var json = res.data;
			if (json != null) {
				if (json.status != "Failed") {

					if ($scope.katalog.length < json.total_product) {
						for (var x = 0; x < json.product.length; x++) {
							img_thumbnail = json.product[x].img_thumbnail;
							$scope.katalog.push({
								product_id    : json.product[x].product_id,
								name_item     : json.product[x].name_item,
								harga         : json.product[x].harga,
								img_medium    : json.product[x].img_medium,
								harga_lama    : json.product[x].harga_lama,
								discount   	  : json.product[x].discount,
								tag           : json.product[x].tag,
							});
						}
						$scope.moredata = $scope.katalog.length < json.total_product;
						$scope.$broadcast('scroll.infiniteScrollComplete');
					} else {
						$ionicPopup.alert({
							title: "Alert",
							template: "No More Data"
						});
					}
				} else {
					$ionicPopup.alert({
						title: "Alert",
						template: "No More Data"
					});
				}
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};

	$scope.doRefresh = function() {
		$scope.getListProduct().then(function(res) {
			$scope.$broadcast('scroll.refreshComplete');
			$scope.katalog = res.data.product;
			if ($scope.katalog) {
				$scope.moredata = $scope.katalog.length < json.total_product;
			}
		}, function() {
			$scope.$broadcast('scroll.refreshComplete');
		});

	};

	$scope.setTab = function(id) {
		$scope.tab = id;
	}

})
.controller('katalogCategoryController', function($scope, $state, $http, $ionicLoading, $timeout, $ionicPopup, productService, $ionicScrollDelegate) {
	var page = 1;
	$ionicLoading.show();

	$scope.kategori_name = productService.categoryName;
	var link = base_url + 'get_list_product_v2';
	$http({
		method  : 'POST',
		url     : link,
		data    : {
			customer_id : window.localStorage['customer_id'],
			category    : productService.category,
			page        : page,
			token       : token
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide()
		/* check */
		if (res.data.status == 'Invalid Token') {
			check_token();
		}
		if (res.data.status == 'OFF') {
			check_status_aplikasi(res.data.message);
		}
		if (res.data.status == 'Member Not Found') {
			check_status_member_not_found();
		}
		if (res.data.status == 'Member Not Active') {
			check_status_member();
		}
		/* end check */

		$scope.katalog = res.data.product;
		if (res.data.status == "Not_found") {
			$ionicPopup.alert({
				title: "Alert",
				template: "No Data"
			});
		}
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.detailBarang = function  (id) {
		productService.selectedProduct = id;
		page = 1;
		productService.list_data = $scope.katalog;
		$scope.cache_view = false;
		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function () {
		return true;
	}

	$scope.loadMoreData=function() {
		$ionicLoading.show()
		page += 1;
		var link = base_url+'get_list_product_v2';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				category    : productService.category,
				page        : page,
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			var json = res.data;
			if (json != null) {
				if (json.status!="Failed") {
					if ($scope.katalog.length < json.total_product) {
						for (var x = 0; x < json.product.length; x++) {
							$scope.katalog.push({
								product_id    : json.product[x].product_id,
								name_item     : json.product[x].name_item,
								harga         : json.product[x].harga,
								img_medium    : json.product[x].img_medium,
								harga_lama    : json.product[x].harga_lama,
								discount   	  : json.product[x].discount,
								tag           : json.product[x].tag,
							});
						}
						$scope.moredata = true;
						$scope.$broadcast('scroll.infiniteScrollComplete');
					} else {
						$ionicPopup.alert({
							title: "Alert",
							template: "No More Data"
						});
					}
				} else {
					$ionicPopup.alert({
						title: "Alert",
						template: "No More Data"
					});
				}
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	};

	$scope.doRefresh = function() {
		$timeout( function() {
			//simulate async response
			$scope.katalog.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
			//Stop the ion-refresher from spinning
			$scope.$broadcast('scroll.refreshComplete');
		}, 1000);
	};
	var scroll = document.getElementById('ion-scroll-category');
	scroll.addEventListener('scroll', function() {
		var toTop = document.getElementById('to-top-category');
		if (scroll.scrollTop > 100) {
			toTop.style.display = 'flex';
		} else {
			toTop.style.display = 'none';
		}
	});
	$scope.toTop = function() {
		$ionicScrollDelegate.scrollTop(true);
	}
})
.controller('detailBarangController', function($scope, $state, $ionicActionSheet, $http, $ionicLoading, $window, $ionicPopup, $rootScope, $timeout, productService, $ionicSlideBoxDelegate, member, $sce, $ionicModal, $q) {
	$scope.productService = productService;
	$scope.postDataOrder = {};
	var array_image = [];
	$scope.slideboxStyle = false;

	$scope.initSlide = false;

	$scope.slideBoxIndex = 0;

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === 'undefined') {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$scope.array_image = [];

	$ionicModal.fromTemplateUrl('templates/modalFullImage.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.changeSlider = function(index) {
		$scope.slideBoxIndex = index;
		$scope.$broadcast('slideBox.setSlide', index);
		if (index > 0) {
			var videoProduct = document.getElementById('video-product');
			if (videoProduct) {
				videoProduct.pause();
			}
		}
	}

	$scope.fullImage = function(index) {
		$scope.modal.show();
		$timeout(function() {
			if (!$scope.initSlide) {
				$scope.initSlide = true;
				new Swiper('.swiper-container', {
					loop: true,
					zoom: true,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
					},
				});
			}
			var mySwiper = document.querySelector('.swiper-container').swiper;
			mySwiper.slideTo(index + 1, 0);
		}, 500);
	}

	$scope.closeModal = function() {
		$scope.array_image = [];
		$scope.modal.hide();
	}

	$scope.getDetailProduct = function() {
		var link = base_url + 'get_detail_product';
		return $http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id   : window.localStorage['customer_id'],
				product_id    : productService.selectedProduct,
				token         : token
			},
			timeout: 25000
		});
	}

	$scope.getCartTotal = function() {
		var url = base_url + 'get_cart_total';
		return $http({
			method  : 'POST',
			url     : url,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		});
	}

	$scope.getData = function() {
		$ionicLoading.show();
		$q.all([$scope.getDetailProduct(), $scope.getCartTotal()])
			.then(function(res) {
				$ionicLoading.hide()
				var product = res[0].data;
				$scope.product_name           = product.name_item;
				$scope.product_harga          = product.harga;
				$scope.product_harga_formated = toRp(product.harga);
				$scope.product_keterangan     = product.keterangan;

				$scope.product_keterangan     = product.keterangan;
				$scope.img_url                = product.img_large;

				$scope.product_min_order      = product.min_order;
				$scope.product_id             = product.product_id;
				$scope.product_harga_lama     = product.harga_lama;
				$scope.product_img_large      = product.img_large;
				$scope.product_img_medium     = product.img_medium;
				$scope.product_img_thumbnail  = product.img_thumbnail;
				$scope.product_type           = product.product_type;
				$scope.tipe                   = product.product_type;

				$scope.list_image             = product.image_data;
				$scope.video             	  = $sce.trustAsResourceUrl(product.video);
				if ($scope.video) {
					var video 				  = product.video.split('.');
					$scope.video_type 		  = video[video.length - 1];
				}

				$scope.harga_grosir           = product.harga_grosir;

				$scope.tipe_customer          = product.status_harga_customer;
				$scope.list_variant           = product.variant;
				$scope.discount           	  = product.discount;
				$scope.view_stock             = product.view_stock;
				localStorage.setItem('status_member', product.status_member);

				$ionicSlideBoxDelegate.update();
				$timeout( function() {
					$scope.slideboxStyle = true;
				}, 500);

				for (var z = 0; z < product.image_data.length; z++) {
					array_image.push(product.image_data[z].foto);
				}

				for (i = 0; i < $scope.list_variant.length; i++) {
					angular.element(document.querySelector('#qty_' + i)).val(" ");
				}

				var cart = res[1].data;

				if (cart.status == 'Invalid Token') {
					check_token();
				}
				if (cart.status == 'OFF') {
					check_status_aplikasi(cart.message);
				}
				if (cart.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (cart.status == 'Member Not Active') {
					check_status_member();
				}
				/* end check */

				total_cart = cart.total_cart;
				$rootScope.total_cart = total_cart;
				$rootScope.total_message = cart.total_message;
				$rootScope.total_chat_product = cart.total_chat_product;
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
	}

	$scope.getData();

	function getCartTotal() {
		$ionicLoading.show();
		var url = base_url + 'get_cart_total';
		$http({
			method  : 'POST',
			url     : url,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.total_cart = total_cart;
			$rootScope.total_message = res.data.total_message;
			$rootScope.total_chat_product = res.data.total_chat_product;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.submit_order = function () {
		var variant_id = [];
		var qty = [];
		$scope.array_jenis = [];
		for (i = 0; i < $scope.list_variant.length; i++) {
			var inputs1 = angular.element(document.querySelector('#qty_'+i));
			if (inputs1.val().length > 0) {
				variant_id.push($scope.list_variant[i].id_variant);
				qty.push(inputs1.val());
			}
		}

		if (!localStorage.getItem('customer_id') && !localStorage.getItem('status_member')) {
			$state.go('eventmenu.login');
		} else if (localStorage.getItem('status_member') !== 'Active') {
			member.checkMember();
		} else {
			if (variant_id.length == 0) {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'Piih variant & qty yg anda inginkan terlebih dahulu'
				});
			} else {
				$ionicLoading.show();
				var link = base_url + 'process_order_item';
				$http({
					method  : 'POST',
					url     : link,
					data    : {
						customer_id : window.localStorage['customer_id'],
						token       : token,
						prod_id     : productService.selectedProduct,
						variant_id  : variant_id,
						qty         : qty,
						notes       : document.getElementById('note').value,
						ref			: ionic.Platform.platform()
					},
					timeout: 25000
				}).then(
				function(res) {
					$ionicLoading.hide();
					if (res.data.status == 'Success') {
						getCartTotal();
						$ionicPopup.alert({
							title: res.data.status,
							template: res.data.message,
							buttons: [{
								text: 'OK',
								type: 'button-default',
								onTap: function() {
									$state.go('eventmenu.dashboard');
								}
							}]
						});
					} else {
						$ionicPopup.alert({
							title: res.data.status,
							template: res.data.message
						});
					}
				}, function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}

		}
	}

	$scope.actionSaveImage = function() {
		$ionicActionSheet.show({
			buttons: [
			{ text: 'Save All Images' },
			{ text: 'Save Current Images' }
			],
			titleText: 'Select Save Image Options',
			cancelText: 'Cancel',
			cancel: function() {
				console.log('Canceled');
			},
			buttonClicked: function(index) {
				if (index === 0) {
					var img = $scope.list_image;

					var i = 0;
					function saveImage() {
						$ionicLoading.show();
						setTimeout(function() {
							$scope.save_image(img[i].foto,i);
							i++;
							if (i < img.length) {
								saveImage();
							} else {
								$ionicLoading.hide();
							}
						},800)
					}

					saveImage();

				} else if (index === 1) {
					$scope.save_image(undefined,0);
				}
				return true;
			}
		});
	}

	$scope.save_image = function(url_file, i) {
		if (url_file === undefined) {
			$scope.img_url = base_url_media+"/images/large/"+array_image[$ionicSlideBoxDelegate.currentIndex()];
		} else {
			$scope.img_url = base_url_media+"/images/large/"+url_file;
		}

		cordova.plugins.diagnostic.requestRuntimePermission(function(status) {
			switch(status) {
				case cordova.plugins.diagnostic.permissionStatus.GRANTED:

				break;
				case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:

				break;
				case cordova.plugins.diagnostic.permissionStatus.DENIED:

				break;
				case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:

				break;
			}
		}, function(error) {
			console.error("The following error occurred: "+error);
		}, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);
		cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(successCallback(i));
	}

	function successCallback(i) {
		download_lagi2($scope.img_url,i);
	}

	// SAVE IMAGE 3 //
	function download_lagi2(url,i) {
		$ionicLoading.show()
		setTimeout(function() {
			// Do something after 3 seconds
			var success = function(msg) {
				console.info(msg);
				var img_length = $scope.list_image.length - 1;
				if (i === img_length) {
					alert('Image Successfully Downloaded');
				}
				$ionicLoading.hide()
			};

			var error = function(err) {
				console.error(err);
				alert('message: '          + err);
				$ionicLoading.hide()
			};

			saveImageToPhone(url, success, error);
		}, 3000);
	}

	function saveImageToPhone(url, success, error) {
		var canvas, context, imageDataUrl, imageData;
		var img = new Image();
		img.onload = function() {
			canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			context = canvas.getContext('2d');
			context.drawImage(img, 0, 0);
			try {
				imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
				imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
				cordova.exec(
					success,
					error,
					'Canvas2ImagePlugin',
					'saveImageDataToLibrary',
					[imageData, url]
					);
			}
			catch(e) {
				error(e.message);
			}
		};
		try {
			img.src = url;
		}
		catch(e) {
			error("ero saveImageToPhone"+e.message);
		}
	}

	$scope.share = function() {
		var images = [];
		for (var i = 0; i < $scope.list_image.length; i++) {
			var image = base_url_media + '/images/original/' + $scope.list_image[i].foto;
			images.push(image);
		}
		window.plugins.socialsharing.share(
			null,
			$scope.product_name,
			images,
			null,
			function(succesMsg) {
				console.log(succesMsg)
			},
			function(errorMsg) {
				alert("Error: Cannot Share : "+errorMsg)
			}
		);
	}

	$scope.chatProduct = function() {
		$scope.customer_id = localStorage.getItem('customer_id');
		if ($scope.customer_id === null) {
			$state.go('eventmenu.login');
		} else {
			productService.product_id = $scope.product_id;
			$state.go('eventmenu.chatProduct');
		}
	}

	$scope.successCopy = function(e) {
		e.clearSelection();
		$ionicLoading.show({
			template: 'Deskripsi berhasil di copy ke clipboard',
			duration: 1000,
			noBackdrop : true
		})
	}

})
.controller('listpesananbarangController', function($scope, $state, $http, $ionicHistory, $ionicLoading, $ionicPopup, listPesananService, $window, $rootScope, member) {
	if (!localStorage.getItem('customer_id')) {
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('eventmenu.login');
	}
	$scope.postData = {};
	$scope.checkedOrder = [];
	$scope.checkItems = {}
	idx = 0;

	list_order();

	function list_order() {
		$ionicLoading.show();
		var link = base_url + 'list_order';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$scope.get_cart_total();
			$scope.list_order = res.data.order;

			if ($scope.list_order !== undefined) {
				$scope.list_order.map(function(order) {
					order.max = order.qty;
				});
			}

			$scope.total_amount = toRp(res.data.total_amount);
			$scope.total_qty = res.data.total_qty;
			$scope.total_weight = res.data.total_weight;
			$scope.satuan_berat = $window.localStorage['satuan_berat'];
			localStorage.setItem('status_member', res.data.status_member);
			$scope.fitur_rekap = res.data.fitur_rekap;
			$scope.tipe_customer = res.data.order[0].status_harga_customer;

			if (res.data.total_qty == 0) {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No Data'
				});
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.get_cart_total = function() {
		var url = base_url + 'get_cart_total';
		$http({
			method  : 'POST',
			url     : url,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.total_cart = total_cart;
			$rootScope.total_message = res.data.total_message;
			$rootScope.total_chat_product = res.data.total_chat_product;
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.setCheckedOrder = function(index, id, name, variant, qty, weight, price, subtotal) {
		if ($scope.checkItems[index] == true) {
			idx++;
			$scope.checkedOrder.push({
				idx: idx-1,
				id: id,
				name: name,
				variant: variant,
				qty: qty,
				weight: weight,
				price: price,
				subtotal: subtotal
			});
		} else {
			if ($scope.checkedOrder.length == 1) {
				$scope.checkedOrder.splice(0, 1);
			} else {
				$scope.checkedOrder.splice($scope.checkedOrder[idx-1].idx, 1);
			}
			idx--;
		}
	}

	$scope.rekap = function () {
		if ($scope.checkedOrder.length >= 1) {
			listPesananService.checkedOrder = $scope.checkedOrder;
			$state.go('eventmenu.rekap');
		} else if (localStorage.getItem('status_member') != 'Active') {
			member.checkMember();
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Silahkan Pilih Pesanan Terlebih Dahulu'
			});
		}
	}

	$scope.dropship = function () {
		if ($scope.checkedOrder.length >= 1) {
			listPesananService.checkedOrder = $scope.checkedOrder;
			$state.go('eventmenu.dropship');
		} else if (localStorage.getItem('status_member') != 'Active') {
			member.checkMember();
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Silahkan Pilih Pesanan Terlebih Dahulu'
			});
		}
	}

	$scope.actionQty = function(index, type, id) {
		var qty = $scope.list_order[index].qty;
		var max = $scope.list_order[index].max;
		if (type == 'plus') {
			var newQty = parseInt(qty) + 1;
		} else {
			var newQty = parseInt(qty) - 1;
		}

		if (newQty <= max && newQty > 0) {
			$scope.list_order[index].qty = newQty;
			$scope.checkedOrder.map(function(item) {
				if (item.id === id) {
					item.qty = newQty;
				}
			});
		}
	}
})

.controller('rekapController', function($scope,$state, $http, $ionicLoading,listPesananService, $window, $ionicPopup) {
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder       = listPesananService.checkedOrder;
	$scope.customer_name      = $window.localStorage['customer_name'];
	$scope.customer_id        = $window.localStorage['customer_id'];

	var total_amount          = 0;
	var total_qty             = 0;
	var total_weight          = 0;
	var total_item_per_produk = 0;
	var array                 = $scope.checkedOrder;
	var length_arr            = array.length;


	for (var x = 0; x < length_arr; x++) {
		total_amount          += parseFloat(array[x].subtotal);
		total_qty             += parseFloat(array[x].qty);
		total_weight          += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.total_amount      = toRp(total_amount);
	$scope.total_all      	 = toRp(total_amount);
	$scope.total_qty         = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight      = total_weight.toFixed(2);
	$scope.postData = {};

	$scope.potongan_point = '0';

	$ionicLoading.show();
	var link = base_url + 'get_content';
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 25000
	}).then(function(res) {
		$ionicLoading.hide();

		$scope.point_reward_status = res.data[36].value;
		$scope.kurs_point = Number(res.data[37].value).toLocaleString('id');
		$scope.customer_point = res.data.point;
	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.usePointChange = function() {
		$scope.postData.usePoint = !$scope.postData.usePoint;
		if (!$scope.postData.usePoint) {
			$scope.potongan_point = '0';
			$scope.setTotal();
		}
	}

	$scope.pointChanged = function(point) {
		$scope.potongan_point = point ? Number(point * $scope.kurs_point).toLocaleString('id') : '0';
		$scope.setTotal();
	}

	$scope.setTotal = function() {
		var subtotal = $scope.total_amount.split('.').join('');
		var potongan_point = $scope.potongan_point.split('.').join('');
		var total_all = parseInt(subtotal) - potongan_point;
		if	(total_all < 0) {
			var new_potongan_point = parseInt(potongan_point) + parseInt(total_all);
			$scope.postData.point = Math.round(new_potongan_point / $scope.kurs_point);
			document.getElementById('point').value = $scope.postData.point;
			new_potongan_point = $scope.postData.point * $scope.kurs_point;
			$scope.potongan_point = (new_potongan_point).toLocaleString('id');
			total_all = 0;
		}
		$scope.total_all = toRp(total_all);
	}

	$scope.rekap = function() {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Konfirmasi',
			template: 'Konfirmasi Rekap / COD ?'
		});
		var point     = $scope.postData.point;
		var potongan_point = $scope.potongan_point.split('.').join('');

		confirmPopup.then(function(res) {
			if (res) {
				$ionicLoading.show();
				var link = base_url + 'process_rekap';
				$http({
					method : 'POST',
					url : link,
					data : {
						token         : token,
						customer_id   : $scope.customer_id,
						total         : $scope.total_amount,
						weight        : $scope.total_weight,
						order_item_id : $scope.checkedOrder,
						notes 		  : $scope.postData.notes,
						point		  : potongan_point > 0 ? point : 0,
						kurs_point	  : $scope.kurs_point
					},
					timeout: 25000
				}).then(
				function(res) {
					$ionicLoading.hide();
					if (res.data.status == 'Success') {
						$ionicPopup.alert({
							title: 'Notifikasi',
							template: 'Pesanan telah direkap'
						});
						$state.go('eventmenu.listpesananbarang');
					}
				}, function(response) {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			} else {
				$state.go('eventmenu.listpesananbarang');
			}
		})
	}

})


//KIRIM ALAMAT SENDIRI
.controller('kirimAlamatSendiriController', function($scope, $http, $ionicLoading,listPesananService, $window, $ionicPopup, $timeout, $ionicHistory) {
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = 0;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var total_item_per_produk = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;


	for (var x = 0; x < length_arr; x++) {
		total_amount += parseFloat(array[x].subtotal);
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight = total_weight.toFixed(2);

	$ionicLoading.show()
	var link = base_url+"get_customer_info";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 25000
	}).then(
		function(res) {
			prov_id = res.data.prov_id;
			kota_id = res.data.kota_id;
			kec_id = res.data.kecamatan_id;

			$scope.arr_prov.push({provinsi_id:res.data.prov.province_id, provinsi:res.data.prov.province});
			$scope.arr_kota.push({kota_id:res.data.kota.city_id, kota:res.data.kota.city_name});
			$scope.arr_kecamatan.push({kecamatan_id:res.data.kec.kec_id, kecamatan:res.data.kec.kec_name});

			var customer            = res.data.customer;
			$scope.postData.dari    = shop_name;
			$scope.postData.kepada  = customer.name;
			$scope.postData.alamat  = customer.address;
			$scope.postData.kodepos = customer.postcode;
			$scope.postData.telepon = customer.phone;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
	});

	var link = base_url+"get_content";
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token
		},
		timeout: 25000
	}).then(
		function(res) {
		$ionicLoading.hide();

		var json = res.data;
		$window.localStorage['origin_city_id'] = json[21].value;
		$window.localStorage['origin_city_name'] = json[26].value;
		$window.localStorage['satuan_berat'] = 'kg';

		if (json[22].value == "available") {
			$scope.arr_ekspedisi.push({'code':'jne'});
		}
		if (json[23].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'tiki'});
		}
		if (json[24].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'pos'});
		}
		if (json[25].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'wahana'});
		}
		if (json[35].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'jnt'});
		}
		if (json[38].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'sicepat'});
		}
		if (json[39].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'lion'});
		}
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	//get tarif
	$scope.getTarif = function (val) {
		//get tarif list ke api rajaongkir
		$ionicLoading.show()
		var param='?token='+'8abf4902a0db27dcb7f62a01c2fd0d0a'+'&domain='+'ratuwedges.com'+'&origin_city_id='+$window.localStorage['origin_city_id']+'&destination_id='+$window.localStorage['kecamatan_id']+'&destination_type=subdistrict&weight='+total_weight+'&satuan='+$window.localStorage['satuan_berat']+'&courier='+val;
		var link = base_url_api+'/cost'+param;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.listTarif = res.data.result[0].costs;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	//set Tarif
	$scope.setOngkir = function (val) {
		val = val.split("#");
		$scope.ongkir = toRp(val[0]);
		var subtotal = $scope.total_amount.split('.').join('');
		var ongkir = $scope.ongkir.split('.').join('');
		$scope.tarif_tipe = val[1];
		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
	}


	//process dropship kirim ke alamat lain
	$scope.process_dropship1 = function () {
		var dari      = $scope.postData.dari;
		var kepada    = $scope.postData.kepada;
		var alamat    = $scope.postData.alamat;
		var provinsi  = $window.localStorage['prov_id'];
		var kota      = $window.localStorage['kota_id'];
		var kecamatan = $window.localStorage['kecamatan_id'];
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif     = $scope.postData.tarif;
		var kodepos   = $scope.postData.kodepos;
		var telepon   = $scope.postData.telepon;

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder,function(value,index) {
			list_dropship.push({id: value.id, qty: value.qty });
		});

		if (ekspedisi == null || ekspedisi == '') {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Ekspedisi Tidak Boleh kosong"
			});
		} else if (tarif == null || tarif == '') {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Tarif Tidak Boleh kosong"
			});
		} else if (ekspedisi == 'pos' && kodepos === undefined) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Kode POS Tidak Boleh kosong"
			});
		} else {
			// A confirm dialog
			var confirmPopup = $ionicPopup.confirm({
				title: "Notifikasi",
				template: "Konfirmasi Dropship ?"
			});
			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show()
					var link = base_url+"process_dropship";
					tarif = tarif.split("#");
					var tarif_tipe = tarif[1];
					$http({
						method  : 'POST',
						url     : link,
						data    : {
							customer_id       : $window.localStorage['customer_id'],
							from              : dari,
							to                : kepada,
							address_recipient : alamat,
							phone_recipient   : telepon,
							postal_code       : kodepos,
							ongkir            : $scope.ongkir.split('.').join(''),
							weight            : $scope.total_weight,
							order_item_id     : list_dropship,
							ekspedisi         : ekspedisi,
							tarif_tipe        : tarif_tipe,
							prov_id           : provinsi,
							kota_id           : kota,
							kecamatan_id      : kecamatan,
							jenis_customer    : $window.localStorage['jenis_customer'],
							token             : token
						},
						timeout: 25000
					}).then(
						function(res) {
						$ionicLoading.hide()
						$ionicPopup.alert({
							title: "Notifikasi",
							template: res.data.status
						});
						$timeout( function() {
							$ionicHistory.goBack(-1);
						}, 1000);
						}, function(response) {
							$ionicLoading.hide();
							alert('Failed to continue, please check your internet connection');
					});
				}
			});
		}
	}
})

.controller('dropshipController', function($scope, $http, $ionicLoading, listPesananService, $window, $ionicPopup, $timeout, $ionicHistory, $q, $state, $ionicModal) {
	$scope.postData = {
		ekspedisi: '',
		tarif: '',
		usePoint: false,
		point: ''
	};
	$scope.nonTarif = false;
	$scope.address_index = 0;
	$scope.ekspedisi = [];
	$scope.addresses = [];
	$scope.listTarif = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = '0';

	$scope.potongan_point = '0';

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var total_item_per_produk = 0;
	var array = $scope.checkedOrder;
	var length_arr = array.length;

	for (var x = 0; x < length_arr; x++) {
		total_amount += parseFloat(array[x].subtotal);
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight = total_weight.toFixed(2);

	var customer_id = localStorage.getItem('customer_id');

	$scope.getAddress = function() {
		var link = base_url + 'addresses';
		return $http({
			method : 'POST',
			url : link,
			data : {
				customer_id: customer_id,
				token: token
			},
			timeout: 25000
		});
	}

	$scope.getContent = function() {
		var link = base_url + 'get_content';
		return $http({
			method : 'POST',
			url : link,
			data : {
				customer_id: customer_id,
				token: token
			},
			timeout: 25000
		});
	}

	$ionicLoading.show();
	$q.all([$scope.getAddress(), $scope.getContent()]).then(function(res) {
		$ionicLoading.hide();
		$scope.addresses = res[0].data;

		var json = res[1].data;
		$window.localStorage['origin_city_id'] = json[21].value;
		$window.localStorage['origin_city_name'] = json[26].value;
		$window.localStorage['satuan_berat'] = 'kg';

		$scope.point_reward_status = json[36].value;
		$scope.kurs_point = Number(json[37].value).toLocaleString('id');
		$scope.customer_point = json.point;

		if (json[22].value == 'available') {
			$scope.ekspedisi.push({ 'code': 'jne' });
		}
		if (json[23].value == 'available') {
			$scope.ekspedisi.push({ 'code': 'tiki' });
		}
		if (json[24].value == 'available') {
			$scope.ekspedisi.push({ 'code': 'pos' });
		}
		if (json[25].value == 'available') {
			$scope.ekspedisi.push({ 'code': 'wahana' });
		}
		if (json[35].value == 'available') {
			$scope.ekspedisi.push({ 'code': 'jnt' });
		}
		if (json[38].value == 'available') {
			$scope.ekspedisi.push({'code':'sicepat'});
		}
		if (json[39].value == 'available') {
			$scope.ekspedisi.push({'code':'lion'});
		}

		$scope.nonTarif = json[40].value === 'available';

	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.usePointChange = function() {
		$scope.postData.usePoint = !$scope.postData.usePoint;
		if (!$scope.postData.usePoint) {
			$scope.potongan_point = '0';
			$scope.setTotal();
		}
	}

	$scope.pointChanged = function(point) {
		$scope.potongan_point = point ? Number(point * $scope.kurs_point).toLocaleString('id') : '0';
		$scope.setTotal();
	}

	$scope.setTotal = function() {
		var subtotal = $scope.total_amount.split('.').join('');
		var ongkir = $scope.ongkir.split('.').join('');
		var potongan_point = $scope.potongan_point.split('.').join('');
		var total_all = parseInt(subtotal) + parseInt(ongkir) - potongan_point;
		if	(total_all < 0) {
			var new_potongan_point = parseInt(potongan_point) + parseInt(total_all);
			$scope.postData.point = Math.round(new_potongan_point / $scope.kurs_point);
			document.getElementById('point').value = $scope.postData.point;
			new_potongan_point = $scope.postData.point * $scope.kurs_point;
			$scope.potongan_point = (new_potongan_point).toLocaleString('id');
			total_all = 0;
		}
		$scope.total_all = toRp(total_all);
	}

	$scope.toAddAddress = function() {
		$scope.modal.hide();
		$state.go('eventmenu.addAddress');
	};

	$ionicModal.fromTemplateUrl('templates/modal-list-address.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then( function($ionicModal) {
        $scope.modal = $ionicModal;
    });

	$scope.selectAddress = function(index) {
		if ($scope.address_index !== index && $scope.postData.ekspedisi) {
			$scope.getTarif($scope.postData.ekspedisi);
		}
		$scope.address_index = index;
		$scope.modal.hide();
	};

	$scope.rupiah = function(value) {
		return 'Rp. ' + Number(value).toLocaleString('id');
	};

	$scope.getTarif = function (val) {
		if (val === 'Non Tarif') {
			$scope.setOngkir('0#');
			return;
		}
		$ionicLoading.show();
		var destination_id = $scope.addresses[$scope.address_index].subdistrict_id;
		var param ='?token='+'8abf4902a0db27dcb7f62a01c2fd0d0a'+'&domain='+'ratuwedges.com'+'&origin_city_id='+$window.localStorage['origin_city_id']+'&destination_id='+destination_id+'&destination_type=subdistrict&weight='+total_weight+'&satuan='+$window.localStorage['satuan_berat']+'&courier='+val;
		var link = base_url_api + '/cost' + param;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.postData.tarif = '';
			$scope.listTarif = [];
			if (res.data.result[0].costs.length) {
				$scope.listTarif = res.data.result[0].costs;
			} else {
				$ionicPopup.alert({
					title: 'Notifikasi',
					template: 'Ongkir tidak tersedia'
				});
			}
			$scope.ongkir = '0';
			$scope.tarif_tipe = '';
			$scope.setTotal();
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.setOngkir = function (val) {
		val = val.split("#");
		$scope.ongkir = toRp(val[0]);
		$scope.tarif_tipe = val[1];
		$scope.setTotal();
	}

	$scope.process_dropship = function () {
		var ekspedisi = $scope.postData.ekspedisi;
		var tarif     = $scope.postData.tarif;
		var point     = $scope.postData.point;
		var potongan_point = $scope.potongan_point.split('.').join('');
		var address = $scope.addresses[$scope.address_index];

		var list_dropship = [];
		angular.forEach($scope.checkedOrder,function(value) {
			list_dropship.push({ id: value.id, qty: value.qty });
		});

		if (!address) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Alamat pengiriman tidak boleh kosong'
			});
		} else if (!ekspedisi) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Ekspedisi Tidak Boleh kosong'
			});
		} else if (!tarif && ekspedisi !== 'Non Tarif') {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Tarif Tidak Boleh kosong'
			});
		} else if (ekspedisi === 'Non Tarif' && !$scope.postData.resi) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'No. Resi Tidak Boleh kosong'
			});
		} else {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Notifikasi',
				template: 'Konfirmasi Dropship ?'
			});
			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show()
					var link = base_url + 'dropship';
					tarif = tarif.split('#');
					var tarif_tipe = tarif[1];
					$http({
						method  : 'POST',
						url     : link,
						data    : {
							customer_id       : $window.localStorage['customer_id'],
							ongkir            : $scope.ongkir.split('.').join(''),
							weight            : $scope.total_weight,
							order_item_id     : list_dropship,
							address_id		  : address.id,
							ekspedisi         : ekspedisi,
							tarif_tipe        : tarif_tipe,
							resi              : $scope.postData.resi,
							jenis_customer    : $window.localStorage['jenis_customer'],
							token             : token,
							ref				  : ionic.Platform.platform(),
							point			  : potongan_point > 0 ? point : 0,
							kurs_point		  : $scope.kurs_point
						},
						timeout: 25000
					}).then(
						function(res) {
							$ionicLoading.hide();
							$ionicPopup.alert({
								title: 'Notifikasi',
								template: res.data.status
							});
							$timeout( function() {
								$ionicHistory.goBack();
							}, 1000);
						}, function() {
							$ionicLoading.hide();
							alert('Failed to continue, please check your internet connection');
					});
				}
			});
		}
	}
})


//KIRIM ALAMAT LAIN
.controller("kirimAlamatLainController",function($scope,$state, $http, $ionicLoading,listPesananService, $window, $ionicPopup, $timeout, $ionicHistory, $ionicModal) {
	$scope.postData = {};

	$scope.arr_prov = [];
	$scope.arr_kota = [];
	$scope.arr_kecamatan = [];
	$scope.arr_ekspedisi = [];
	$scope.listPesananService = listPesananService;
	$scope.checkedOrder = listPesananService.checkedOrder;
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.total_all = 0;
	$scope.ongkir = 0;

	var total_amount = 0;
	var total_qty = 0;
	var total_weight = 0;
	var total_item_per_produk = 0;
	var array = $scope.checkedOrder;

	for (var x=0;x<array.length;x++) {
		total_amount += parseFloat(array[x].subtotal);
		total_qty += parseFloat(array[x].qty);
		total_weight += parseFloat(array[x].weight);
		total_item_per_produk += parseFloat(array[x].item_per_produk);
	}

	$scope.total_amount = toRp(total_amount);
	$scope.total_qty = total_qty;
	$scope.total_item_produk = total_item_per_produk;
	$scope.total_weight = total_weight.toFixed(2);

	//get provinsi
	$ionicLoading.show();
	var param = "?token="+'8abf4902a0db27dcb7f62a01c2fd0d0a'+"&domain="+'ratuwedges.com';
	var link = base_url_api+"/province"+param;
	$http({
		method : 'POST',
		url : link,
		data : {},
		timeout: 25000
	}).then(
	function(res) {
		$scope.list_provinsi = res.data.result;
		$scope.ListProvinsi = true;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	//GET KOTA BY PROVINSI ID
	$scope.getKota = function (val) {
		//set prov id
		// val = val.split("#");
		// prov_id = val[0];
		// $scope.provinsi = val[1];

		//get tarif list ke api rajaongkir
		$scope.list_kota = {};
		$scope.list_kecamatan = {};
		$scope.listTarif = {};
		$ionicLoading.show();
		var param = "?token="+'8abf4902a0db27dcb7f62a01c2fd0d0a'+"&domain="+'ratuwedges.com'+"&province_id="+val;
		var link = base_url_api+"/city"+param;

		$http({
			method  : 'POST',
			url     : link,
			data    : {},
			timeout : 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.list_kota = res.data.result;
			$scope.ListKecamatan = [];
			$scope.ongkir = 0;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	//GET KECAMATAN BY KOTA ID
	$scope.getKecamatan = function (val) {
		$scope.list_kecamatan = {};
		$scope.listTarif = {};
		$ionicLoading.show();
		var param = "?token="+'8abf4902a0db27dcb7f62a01c2fd0d0a'+"&domain="+'ratuwedges.com'+"&city_id="+val;
		var link = base_url_api+"/subdistrict"+param;
		$http({
			method : 'POST',
			url : link,
			data : {},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.list_kecamatan = res.data.result;
			$scope.getTarif ($scope.postData.ekspedisi);
			$scope.ongkir = 0;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	//get_content origin city id dll
	var link = base_url+"get_content";
	$http({
	method : 'POST',
	url : link,
	data : {
		customer_id:window.localStorage['customer_id'],
		token:token
	},
	timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();

		var json = res.data;
		$window.localStorage['origin_city_id'] = json[21].value;
		$window.localStorage['origin_city_name'] = json[26].value;
		$window.localStorage['satuan_berat'] = 'kg';

		if (json[22].value == "available") {
			$scope.arr_ekspedisi.push({'code':'jne'});
		}
		if (json[23].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'tiki'});
		}
		if (json[24].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'pos'});
		}
		if (json[25].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'wahana'});
		}
		if (json[35].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'jnt'});
		}
		if (json[38].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'sicepat'});
		}
		if (json[39].value == 'available') {
			$scope.arr_ekspedisi.push({'code':'lion'});
		}
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	//get tarif
	$scope.getTarif = function (val) {
		//get tarif list ke api rajaongkir
		$scope.listTarif = {};
		var kota      = $scope.postData.kota;
		var kecamatan = $scope.postData.kecamatan;
		$ionicLoading.show()
		var param='?token='+'8abf4902a0db27dcb7f62a01c2fd0d0a'+'&domain='+'ratuwedges.com'+'&origin_city_id='+$window.localStorage['origin_city_id']+'&destination_id='+kecamatan+'&destination_type=subdistrict&weight='+total_weight+'&satuan='+$window.localStorage['satuan_berat']+'&courier='+val;
		var link = base_url_api+'/cost'+param;
		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id:window.localStorage['customer_id'],
				token:token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.listTarif = res.data.result[0].costs;
			$scope.ongkir = 0;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	//set Tarif
	$scope.setOngkir = function (val) {
		val = val.split("#");
		$scope.ongkir = toRp(val[0]);
		var subtotal = $scope.total_amount.split('.').join('');
		var ongkir = $scope.ongkir.split('.').join('');
		$scope.tarif_tipe = val[1];
		$scope.total_all = toRp(parseInt(subtotal) + parseInt(ongkir));
	}

	$ionicModal.fromTemplateUrl('templates/modal.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});


	//process dropship kirim ke alamat sendiri
	$scope.process_dropship1 = function () {
		var dari       = $scope.postData.dari;
		var kepada     = $scope.postData.kepada;
		var alamat     = $scope.postData.alamat;
		var provinsi   = $scope.postData.provinsi;
		var kota       = $scope.postData.kota;
		var kecamatan  = $scope.postData.kecamatan;
		var ekspedisi  = $scope.postData.ekspedisi;
		var tarif      = $scope.postData.tarif;
		var kodepos    = $scope.postData.kodepos;
		var telepon    = $scope.postData.telepon;
		var tarif      = tarif.split("#");
		var tarif_tipe = tarif[1];

		var list_dropship = new Array();
		angular.forEach($scope.checkedOrder,function(value,index) {
			list_dropship.push({id: value.id, qty: value.qty });
		});
		if (dari == null) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Dari Tidak Boleh kosong"
			});
		} else if (kepada == null) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Kepada Tidak Boleh kosong"
			});
		} else if (alamat == null) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Alamat Tidak Boleh kosong"
			});
		} else if (provinsi == null || provinsi.indexOf('?') > 0) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Provinsi Tidak Boleh kosong"
			});
		} else if (kota == null  || kota.indexOf('?') > 0) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Kota Tidak Boleh kosong"
			});
		} else if (tarif == null  || tarif == '' || $scope.ongkir == 0) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Tipe Tarif Tidak Boleh kosong"
			});
		} else if (telepon == null) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Telepon Penerima Tidak Boleh kosong"
			});
		} else if (ekspedisi == 'pos' && kodepos === undefined) {
			$ionicPopup.alert({
				title: "Notifikasi",
				template: "Kode POS Tidak Boleh kosong"
			});
		} else {
			// A confirm dialog
			$scope.modal.show();
			var prov = document.getElementById('provinsi');
			var kot = document.getElementById('kota');
			var kec = document.getElementById('kecamatan');
			$scope.data = {
				dari        : dari,
				kepada      : kepada,
				alamat      : alamat,
				telepon     : telepon,
				kodepos     : kodepos,
				ekspedisi   : ekspedisi,
				tarif_tipe  : tarif_tipe,
				provinsi    : prov.options[prov.selectedIndex].text,
				kota        : kot.options[kot.selectedIndex].text,
				kecamatan   : kec.options[kec.selectedIndex].text,
			}

			$scope.submitDropship = function() {
				$ionicLoading.show();
				var link = base_url+"process_dropship";

				$http({
					method  : 'POST',
					url     : link,
					data    : {
						customer_id       : $window.localStorage['customer_id'],
						from              : dari,
						to                : kepada,
						address_recipient : alamat,
						phone_recipient   : telepon,
						postal_code       : kodepos,
						ongkir            : $scope.ongkir.split('.').join(''),
						weight            : $scope.total_weight,
						order_item_id     : list_dropship,
						ekspedisi         : ekspedisi,
						tarif_tipe        : tarif_tipe,
						prov_id           : provinsi,
						kota_id           : kota,
						kecamatan_id      : kecamatan,
						jenis_customer    : $window.localStorage['jenis_customer'],
						token             : token
					},
					timeout: 25000
				}).then(
				function(res) {
					$ionicLoading.hide();
					$scope.modal.hide();
					$ionicPopup.alert({
						title: "Notifikasi",
						template: res.data.status
					});
					$timeout( function() {
						$ionicHistory.goBack(-1);
					}, 1000);
				}, function(response) {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		}
	}
})

.controller("datapesananController", function($scope, $state, dataPesananService) {

	$scope.listPesanan = function  (val) {
		$state.go('eventmenu.listdatapesanan');
		dataPesananService.jenisPesanan = val;
	}

})
.controller("listdatapesananController", function($scope, $state, $http, $ionicPopup, $ionicLoading, dataPesananService, $rootScope, $window) {
	$scope.dataPesananService = dataPesananService;

	$scope.data = {};
	$scope.moredata = false;

	$scope.customer_id = $window.localStorage['customer_id'];
	if (typeof $scope.customer_id === 'undefined') {
		$ionicPopup.alert({
			title: 'Notifikasi',
			template: 'Anda Belum Register Member !!',
			buttons: [{
				text: 'OK',
				type: 'button-default',
				onTap: function() {
					$state.go('eventmenu.login');
				}
			}]
		});
	} else {
		$ionicLoading.show();
		var url = base_url + 'get_cart_total';
		$http({
			method  : 'POST',
			url     : url,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.total_cart = total_cart;
			$rootScope.total_message = res.data.total_message;
			$rootScope.total_chat_product = res.data.total_chat_product;
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		var page = 1;
		$scope.status_pesanan = 'Unpaid';
		$ionicLoading.show();
		var link = base_url + 'get_data_order';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id   : window.localStorage['customer_id'],
				token         : token,
				order_payment : 'Unpaid',
				page          : page
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				$scope.data_pesanan = res.data.list;
				$scope.order_total = res.data.order_total;
				$scope.moredata = $scope.data_pesanan.length < res.data.order_total;
			} else {
				$ionicPopup.alert({
					title: 'Notifikasi',
					template: 'No Data'
				});
			}
			$scope.status_pesanan = 'Unpaid';
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.setJenisPesanan = function(status_pesanan) {
			$ionicLoading.show();
			page = 1;
			var link = base_url + 'get_data_order';
			$http({
				method   : 'POST',
				url      : link,
				data     : {
					customer_id    : window.localStorage['customer_id'],
					token          : token,
					order_payment  : status_pesanan,
					page           : page
				},
				timeout: 25000
			}).then(
			function(res) {
				$ionicLoading.hide();
				if (res.data.status == 'Success') {
					$scope.data_pesanan = res.data.list;
					$scope.tipe_customer = res.data.list[0].status_harga_customer;
					$scope.order_total = res.data.order_total;
					$scope.moredata = true;
					$scope.data.keyword = '';
				} else {
					$scope.data_pesanan = null;
					$scope.tipe_customer = null;
					$scope.order_total = 0;
					$scope.moredata = false;
				}
				$scope.status_pesanan = status_pesanan;
			}, function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.detailPesanan = function(id, order_status) {
			dataPesananService.selectedPesananID = id;
			$state.go('eventmenu.listdatadetailpesanan');
		}

		$scope.loadMoreData = function() {
			$ionicLoading.show();
			page += 1;
			var link = base_url + 'get_data_order';
			$http({
				method : 'POST',
				url    : link,
				data   : {
					customer_id : window.localStorage['customer_id'],
					token : token,
					order_payment : $scope.status_pesanan,
					page : page,
					keyword : $scope.data.keyword,
				},
				timeout: 25000
			}).then(
			function(res) {
				$ionicLoading.hide();
				var json = res.data;
				if (json.status == 'Success') {
					for (var x = 0; x < json.list.length; x++) {
						$scope.data_pesanan.push({
							order_id : json.list[x].order_id,
							order_date : json.list[x].order_date,
							order_time : json.list[x].order_time,
							total : json.list[x].total,
							order_status : json.list[x].order_status,
							kota : json.list[x].kota,
							shipping_to : json.list[x].total,
						});
					}
					$scope.moredata = $scope.data_pesanan.length < res.data.order_total;
					$scope.$broadcast('scroll.infiniteScrollComplete');
				} else {
					$scope.moredata = false;
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No More Data'
					});
				}
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.searchOrder = function(keyword) {
			$ionicLoading.show();
			page = 1;
			var link = base_url + 'get_data_order';
			$http({
				method   : 'POST',
				url      : link,
				data     : {
					customer_id : window.localStorage['customer_id'],
					token : token,
					keyword : keyword,
					order_payment : $scope.status_pesanan,
					page : page
				},
				timeout: 25000
			}).then(
			function(res) {
				$ionicLoading.hide();
				if (res.data.status == 'Success') {
					$scope.data_pesanan = res.data.list;
					$scope.order_total = res.data.order_total;
					$scope.moredata = true;
				} else {
					$scope.data_pesanan = null;
					$scope.tipe_customer = null;
				}
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}

})

.controller('resiController', function($scope, $state, $http, $ionicPopup, $ionicLoading, dataPesananService, $window) {
	$scope.dataPesananService = dataPesananService;

	$scope.data = {};
	$scope.moredata = false;

	$scope.customer_id = $window.localStorage['customer_id'];
	if (typeof $scope.customer_id === 'undefined') {
		$ionicPopup.alert({
			title: 'Notifikasi',
			template: 'Anda Belum Register Member !!',
			buttons: [{
				text: 'OK',
				type: 'button-default',
				onTap: function() {
					$state.go('eventmenu.login');
				}
			}]
		});
	} else {
		$ionicLoading.show();

		var page = 1;
		$ionicLoading.show();
		var link = base_url + 'get_resi';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id   : window.localStorage['customer_id'],
				token         : token,
				page          : page
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				$scope.resi = res.data.resi;
				$scope.resi_total = res.data.resi_total;
				$scope.moredata = $scope.resi.length < res.data.resi_total;
			} else {
				$ionicPopup.alert({
					title: 'Notifikasi',
					template: 'No Data'
				});
			}
			$scope.status_pesanan = 'Unpaid';
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.loadMoreData = function() {
			$ionicLoading.show();
			page += 1;
			var link = base_url + 'get_resi';
			$http({
				method : 'POST',
				url    : link,
				data   : {
					customer_id : window.localStorage['customer_id'],
					token : token,
					page : page,
				},
				timeout: 25000
			}).then(
			function(res) {
				$ionicLoading.hide();
				var json = res.data;
				if (json.status == 'Success') {
					for (var x = 0; x < json.list.length; x++) {
						$scope.resi.push(json.resi);
					}
					$scope.moredata = $scope.resi.length < res.data.resi_total;
					$scope.$broadcast('scroll.infiniteScrollComplete');
				} else {
					$scope.moredata = false;
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No More Data'
					});
				}
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}

		$scope.successCopy = function(e) {
			e.clearSelection();
			$ionicLoading.show({
				template: 'No. Resi berhasil di copy ke clipboard',
				duration: 1000,
				noBackdrop : true
			})
		}
	}

})

.controller('listdatadetailpesananController', function($scope, $state, $http, $ionicLoading, $window, dataPesananService) {

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	$scope.dataPesananService = dataPesananService;

	$ionicLoading.show();
	var link = base_url + 'get_data_order_detail';
	$http({
		method  : 'POST',
		url     : link,
		data    : {
			customer_id : window.localStorage['customer_id'],
			token       : token,
			order_id    : dataPesananService.selectedPesananID
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.data_pesanan      = res.data.list;
		$scope.order_id          = res.data.order_id;
		$scope.order_datetime    = res.data.order_datetime;
		$scope.order_status      = res.data.order_status;
		$scope.order_type        = res.data.order_type;
		$scope.order_payment     = res.data.order_payment;
		$scope.shipping_from     = res.data.shipping_from;
		$scope.shipping_to       = res.data.shipping_to;
		$scope.shipping_weight   = res.data.shipping_weight;
		$scope.address_recipient = res.data.address_recipient;
		$scope.provinsi          = res.data.provinsi;
		$scope.kota              = res.data.kota;
		$scope.kecamatan         = res.data.kecamatan;
		$scope.resi              = res.data.resi;
		$scope.shipping_status   = res.data.shipping_status;
		$scope.ekspedisi         = res.data.ekspedisi;
		$scope.ekspedisi_nontarif= res.data.ekspedisi_nontarif;
		$scope.list_order        = res.data.orders_item;
		$scope.shipping_fee      = res.data.shipping_fee;
		$scope.total             = res.data.total;
		$scope.diskon            = res.data.diskon - res.data.program_diskon;
		$scope.program_diskon    = res.data.program_diskon;
		$scope.diskon_point      = res.data.nominal_point;
		$scope.pajak_berat       = res.data.pajak_berat;
	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.konfirmasipembayaran = function(id) {
		dataPesananService.selectedPesananID = id;
		dataPesananService.other_order_id = true;
		$state.go('eventmenu.konfirmasipembayaran');
	}

	$scope.orderStatus = function(id) {
		dataPesananService.selectedPesananID = id;
		$state.go('eventmenu.orderstatus');
	}

})

.controller('listpesananbarangController', function($scope, $state, $http, $ionicHistory, $ionicLoading, $ionicPopup, listPesananService, $window, $rootScope, member, $ionicModal) {
	if (!localStorage.getItem('customer_id')) {
		$ionicHistory.nextViewOptions({
			disableBack: true
		});
		$state.go('eventmenu.login');
	}
	$scope.postData = {};
	$scope.checkedOrder = [];
	$scope.checkItems = {}
	idx = 0;

	$ionicModal.fromTemplateUrl('templates/fotoProduct.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.showModal = function(image) {
		$scope.modal.show();
		$scope.image = image;
	};

	list_order();

	function list_order() {
		$ionicLoading.show();
		var link = base_url + 'list_order';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$scope.get_cart_total();
			$scope.list_order = res.data.order;

			if ($scope.list_order !== undefined) {
				$scope.list_order.map(function(order) {
					order.max = order.qty;
				});
			}

			$scope.total_amount = toRp(res.data.total_amount);
			$scope.total_qty = res.data.total_qty;
			$scope.total_weight = res.data.total_weight;
			$scope.satuan_berat = $window.localStorage['satuan_berat'];
			localStorage.setItem('status_member', res.data.status_member);
			$scope.fitur_rekap = res.data.fitur_rekap;

			if (res.data.total_qty == 0) {
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No Data'
				});
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.get_cart_total = function() {
		var url = base_url + 'get_cart_total';
		$http({
			method  : 'POST',
			url     : url,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.total_cart = total_cart;
			$rootScope.total_message = res.data.total_message;
			$rootScope.total_chat_product = res.data.total_chat_product;
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.setCheckedOrder = function(index, id, name, variant, qty, weight, price, subtotal) {
		if ($scope.checkItems[index] == true) {
			idx++;
			$scope.checkedOrder.push({
				idx: idx-1,
				id: id,
				name: name,
				variant: variant,
				qty: qty,
				weight: weight,
				price: price,
				subtotal: subtotal
			});
		} else {
			if ($scope.checkedOrder.length == 1) {
				$scope.checkedOrder.splice(0, 1);
			} else {
				$scope.checkedOrder.splice($scope.checkedOrder[idx-1].idx, 1);
			}
			idx--;
		}
	}

	$scope.rekap = function () {
		if ($scope.checkedOrder.length >= 1) {
			listPesananService.checkedOrder = $scope.checkedOrder;
			$state.go('eventmenu.rekap');
		} else if (localStorage.getItem('status_member') != 'Active') {
			member.checkMember();
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Silahkan Pilih Pesanan Terlebih Dahulu'
			});
		}
	}

	$scope.dropship = function () {
		if ($scope.checkedOrder.length >= 1) {
			listPesananService.checkedOrder = $scope.checkedOrder;
			$state.go('eventmenu.dropship');
		} else if (localStorage.getItem('status_member') != 'Active') {
			member.checkMember();
		} else {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Silahkan Pilih Pesanan Terlebih Dahulu'
			});
		}
	}

	$scope.actionQty = function(index, type, id) {
		var qty = $scope.list_order[index].qty;
		var max = $scope.list_order[index].max;
		if (type == 'plus') {
			var newQty = parseInt(qty) + 1;
		} else {
			var newQty = parseInt(qty) - 1;
		}

		if (newQty <= max && newQty > 0) {
			$scope.list_order[index].qty = newQty;
			$scope.checkedOrder.map(function(item) {
				if (item.id === id) {
					item.qty = newQty;
				}
			});
		}
	}

})

.controller("listDropshipController", function($scope, $state, $http, $ionicPopup, $ionicLoading, dataPesananService, $rootScope, $window) {
	$scope.dataPesananService = dataPesananService;

	$scope.data = {};

	$scope.customer_id = $window.localStorage['customer_id'];
	if (typeof $scope.customer_id === 'undefined') {
		$ionicPopup.alert({
			title: 'Notifikasi',
			template: 'Anda Belum Register Member !!',
			buttons: [{
				text: 'OK',
				type: 'button-default',
				onTap: function() {
					$state.go('eventmenu.login');
				}
			}]
		});
	} else {
		var page = 1;
		$ionicLoading.show();
		var link = base_url + 'get_order_dropship';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id   : window.localStorage['customer_id'],
				token         : token,
				page          : page
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.orders.length > 0) {
				$scope.data_pesanan = res.data.orders;
				$scope.moredata = $scope.data_pesanan.length < res.data.total;
			} else {
				$ionicPopup.alert({
					title: 'Notifikasi',
					template: 'No Data'
				});
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		$scope.detailPesanan = function(id) {
			dataPesananService.selectedPesananID = id;
			$state.go('eventmenu.orderstatus');
		}

		$scope.moredata = true;

		$scope.loadMoreData = function() {
			$ionicLoading.show();
			page += 1;
			var link = base_url + 'get_order_dropship';
			$http({
				method : 'POST',
				url    : link,
				data   : {
					customer_id : window.localStorage['customer_id'],
					token : token,
					page : page
				},
				timeout: 25000
			}).then(
			function(res) {
				$ionicLoading.hide();
				var json = res.data;
				if (json.status == 'Success') {
					for (var x = 0; x < json.list.length; x++) {
						$scope.data_pesanan.push({
							order_id : json.list[x].order_id,
							order_date : json.list[x].order_date,
							order_time : json.list[x].order_time,
							total : json.list[x].total,
							order_status : json.list[x].order_status,
							kota : json.list[x].kota,
							shipping_to : json.list[x].total,
						});
					}
					$scope.moredata = true;
					$scope.$broadcast('scroll.infiniteScrollComplete');
				} else {
					$scope.moredata = false;
					$ionicPopup.alert({
						title: 'Alert',
						template: 'No More Data'
					});
				}
			}, function() {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}

})

.controller('orderStatusController', function($scope, $state, $http, $ionicLoading, dataPesananService, $ionicPopup) {

	$scope.customer_name = localStorage.getItem('customer_name');
	$scope.customer_id = localStorage.getItem('customer_id');

	$scope.page = 1;
  $scope.shipping_status = 'Unpaid';

  $scope.getOrder = function() {
    var link = base_url + 'get_order_dropship';
    return $http({
      method  : 'POST',
      url     : link,
      data    : {
        customer_id : $scope.customer_id,
        token       : token,
        page    : $scope.page,
        shipping_status: $scope.shipping_status
      },
      timeout: 25000
    });
  }

  $scope.getDataOrder = function() {
    $ionicLoading.show();
    $scope.getOrder().then(function(res) {
      $ionicLoading.hide();
        if (res.data.orders.length > 0) {
          $scope.data_pesanan = res.data.orders.map(function(order) {
          	order.show = false;
          	return order;
          });
          $scope.moredata = $scope.data_pesanan.length < res.data.total;
        } else {
          $ionicPopup.alert({
            title: 'Notifikasi',
            template: 'No Data'
          });
        }
    }, function() {
      $ionicLoading.hide();
      alert('Failed to continue, please check your internet connection');
    });
  }

  $scope.showOrder = function(index) {
  	$scope.data_pesanan[index].show = !$scope.data_pesanan[index].show;
  };

  $scope.getDataOrder();

  $scope.selectOrder = function(status) {
    $scope.data_pesanan = [];
    $scope.shipping_status = status;
    $scope.getDataOrder();
  }

	$scope.konfirmasipembayaran = function(id) {
		dataPesananService.selectedPesananID = id;
		dataPesananService.other_order_id = true;
		$state.go('eventmenu.konfirmasipembayaran');
	}

  $scope.moredata = true;

  $scope.loadMoreData = function() {
    $ionicLoading.show();
    $scope.page += 1;
    var link = base_url + 'get_order_dropship';
    $http({
      method : 'POST',
      url    : link,
      data   : {
        customer_id : $scope.customer_id,
        token       : token,
        page    : $scope.page,
        shipping_status: $scope.shipping_status
      },
      timeout: 25000
    }).then(
    function(res) {
      $ionicLoading.hide();
      if (res.data.orders.length > 0) {
        for (var x = 0; x < res.data.orders.length; x++) {
        	var order = res.data.orders[x];
        	order.show = false;
          $scope.data_pesanan.push(order);
        }
        $scope.moredata = $scope.data_pesanan.length < res.data.total;
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }
    }, function() {
      $ionicLoading.hide();
      alert('Failed to continue, please check your internet connection');
    });
  }
})

.controller('konfirmasipembayaranController', function($scope, $ionicActionSheet,$state, $http, $ionicLoading, $ionicPopup, $cordovaDevice, dataPesananService, $timeout, member, $ionicActionSheet, $cordovaCamera, $cordovaFile, $cordovaFileTransfer) {
	$scope.postData = {
		order_id: '',
		nama: '',
		bank_account: '',
		transfer_via: '',
		atas_nama: '',
		jumlah_transfer: '',
	};
	$scope.data_order_unpaid = [];
	$scope.bank_accounts = [];
	$scope.setOrderId = function(order_id) {
		$scope.postData.order_id = order_id;
	}

	get_order_unpaid();
	function get_order_unpaid() {
		$ionicLoading.show();
		var link = base_url + 'get_data_order_unpaid';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id   : window.localStorage['customer_id'],
				token         : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.data_order_unpaid = res.data.list;
			$scope.bank_accounts 	 = res.data.bank_accounts;
			$scope.tipe_customer     = res.data.status_harga_customer;
			$scope.order_id = dataPesananService.selectedPesananID;
			$scope.postData.order_id = $scope.order_id
			localStorage.setItem('status_member', res.data.status_member);
			member.checkMember();
			$scope.other_order_id = dataPesananService.other_order_id;
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.rupiah = function(value) {
		return 'Rp. ' + Number(value).toLocaleString('id');
	};

	$scope.doRefresh = function() {
		$timeout(function() {
			get_order_unpaid();
			dataPesananService.other_order_id = false;
			$scope.$broadcast('scroll.refreshComplete');
			$scope.order_id = 0;
		}, 2000);
	};

	$scope.image = null;

	$scope.showAlert = function(title, msg) {
		$ionicPopup.alert({
			title: title,
			template: msg
		});
	};

	$scope.loadImage = function() {
		var hideSheet = $ionicActionSheet.show({
			buttons: [
			{ text: 'Pilih dari gallery' },
			{ text: 'Gunakan Kamera' }
			],
			titleText: 'Pilihan foto',
			cancelText: 'Batal',
			cancel: function() {
				console.log('Canceled');
			},
			buttonClicked: function(index) {
				var type = null;
				if (index === 0) {
					type = Camera.PictureSourceType.PHOTOLIBRARY;
				} else if (index === 1) {
					type = Camera.PictureSourceType.CAMERA;
			    }
			    if (type !== null) {
			    	$scope.selectPicture(type);
			    	hideSheet();
			    }
			}
		});
	}

	$scope.selectPicture = function(sourceType) {
		var options = {
			quality: 30,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: sourceType,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function(imagePath) {
			// Grab the file name of the photo in the temporary directory
			var currentName = imagePath.replace(/^.*[\\\/]/, '');

			//Create a new name for the photo
			var d = new Date(),
				n = d.getTime(),
				newFileName = n + '.jpg';

			// If you are trying to load image from the gallery on Android we need special treatment!
			if ($cordovaDevice.platform == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
				window.FilePath.resolveNativePath(imagePath, function(entry) {
					window.resolveLocalFileSystemURL(entry, success, fail);

					function fail(e) {
						console.error('Error: ', e);
					}

					function success(fileEntry) {
						var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
						// Only copy because of access rights
						$cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success) {
							setTimeout(function() {
								document.getElementById('jumlah_transfer').focus();
								$scope.image = $scope.pathForImage(newFileName);
							}, 500);
						}, function(error) {
							$scope.showAlert('Error', error.exception);
						});
					};
				});
			} else {
				var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
				// Move the file to permanent storage
				$cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function() {
					setTimeout(function() {
						document.getElementById('jumlah_transfer').focus();
						$scope.image = $scope.pathForImage(newFileName);
					}, 500);
				}, function(error) {
					$scope.showAlert('Error', error.exception);
				});
			}
		});
	};

	$scope.pathForImage = function(image) {
		if (image === null) {
			return '';
		} else {
    		return cordova.file.dataDirectory + image;
		}
	};

	$scope.confirm_payment = function() {
		var order_id        = $scope.postData.order_id;
		var nama            = $scope.postData.nama;
		var bank_account    = $scope.postData.bank_account;
		var transfer_via    = $scope.postData.transfer_via;
		var jumlah_transfer = $scope.postData.jumlah_transfer;
		var atas_nama       = $scope.postData.atas_nama;


		if (!order_id) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Pilih Pesanan terlebih dahulu !'
			});
		} else if (!nama) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Nama Tidak Boleh Kosong!'
			});
		} else if (!bank_account) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Bank Tujuan Tidak Boleh Kosong !'
			});
		} else if (!transfer_via) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Bank Pengirim Tidak Boleh Kosong !'
			});
		} else if (!atas_nama) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Atas Nama Tidak Boleh Kosong !'
			});
		} else if (!jumlah_transfer) {
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Jumlah Transfer Tidak Boleh Kosong !'
			});
		} else {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Notifikasi',
				template: 'Konfirmasi Pembayaran ?'
			});
			confirmPopup.then(function(res) {
				if (res) {
					$ionicLoading.show();
					var params = {
						customer_id   : localStorage.getItem('customer_id'),
						token         : token,
						nama          : nama,
						bank_account  : bank_account,
						bank          : transfer_via,
						jumlah        : jumlah_transfer,
						rekening      : atas_nama,
						order_id      : order_id,
					}
					if ($scope.image) {
						$scope.confirmAttach(params);
					} else {
						$scope.confirmWithoutAttach(params);
					}
				}
			});
		}
	}

	var confirm_url = base_url + 'confirm_payment';

	$scope.confirmAttach = function(params) {
		var targetPath = $scope.image;
		var filename = $scope.image;
		var options = {
			fileKey: 'file',
			fileName: filename,
			chunkedMode: false,
			mimeType: 'multipart/form-data',
			params: params
		};

		$cordovaFileTransfer.upload(confirm_url, targetPath, options).then(function(result) {
			$ionicLoading.hide();
			var response = JSON.parse(result.response);
			if (response.status == 'Success') {
				var alertPopup = $ionicPopup.confirm({
					title: 'Notifikasi',
					template: response.status
				});
				alertPopup.then(function(response) {
					if (response) {
						$state.reload();
					} else {
						$state.reload();
					}
				});
			} else {
				$scope.showAlert('Gagal', response.error);
			}
		}, function(err) {
			$ionicLoading.hide();
			console.log(err)
		});
	}

	$scope.confirmWithoutAttach = function(params) {
		$http({
			method  : 'POST',
			url     : confirm_url,
			data    : params,
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				var alertPopup = $ionicPopup.confirm({
					title: 'Notifikasi',
					template: res.data.status
				});
				alertPopup.then(function(response) {
					if (response) {
						$state.reload();
					} else {
						$state.reload();
					}
				});
			} else {
				$scope.showAlert('Gagal', res.data.error);
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})

.controller('pesanmasukController', function($scope, $state, $http, $ionicLoading, dataMessageService, $sce, $ionicPopup) {
	$scope.moredata = false;
	$ionicLoading.show();
	var page = 1;
	var link = base_url + 'get_list_message';
	$http({
		method : 'POST',
		url    : link,
		data   : {
			customer_id: window.localStorage['customer_id'],
			token: token,
			page: page
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		if (res.data.status === 'Success') {
      $scope.data_message = res.data.message;
			$scope.message_total = res.data.message_total;
			$scope.moredata = $scope.data_message.length < $scope.message_total;
		}
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.message = function(msg) {
		return $sce.trustAsHtml(msg);
	}

	$scope.detailMessage = function (id) {
		dataMessageService.selectedMessageId = id;
		$state.go('eventmenu.pesanmasukdetail');
	}

	$scope.loadMoreData = function() {
		$ionicLoading.show();
		page += 1;
		$http({
			method : 'POST',
			url    : link,
			data   : {
				customer_id: window.localStorage['customer_id'],
				token: token,
				page: page
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			var json = res.data;
			if (json.status == 'Success') {
				for (var x = 0; x < json.message.length; x++) {
					$scope.data_message.push({
						id : json.message[x].id,
						status : json.message[x].status,
						subject : json.message[x].subject,
						content : json.message[x].content
					});
				}
				$scope.moredata = $scope.data_message.length < $scope.message_total;
				$scope.$broadcast('scroll.infiniteScrollComplete');
			} else {
				$scope.moredata = false;
				$ionicPopup.alert({
					title: 'Alert',
					template: 'No More Data'
				});
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})

.controller('pesanmasukdetailController', function($scope, $http, $ionicLoading, $rootScope, dataMessageService) {
	$scope.dataMessageService = dataMessageService;
	var message_id = dataMessageService.selectedMessageId;

	$ionicLoading.show();
	var link = base_url + 'get_detail_message';
	$http({
		method : 'POST',
		url : link,
		data : {
			customer_id:window.localStorage['customer_id'],
			token:token,
			message_id: message_id
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.message_subject = res.data.subject;
		$scope.message_content = res.data.content;
		$scope.image = res.data.image;
		getCartTotal();
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	function getCartTotal() {
		$ionicLoading.show();
		var url = base_url + 'get_cart_total';
		$http({
			method  : 'POST',
			url     : url,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			/* check */
			if (res.data.status == 'Invalid Token') {
				check_token();
			}
			if (res.data.status == 'OFF') {
				check_status_aplikasi(res.data.message);
			}
			if (res.data.status == 'Member Not Found') {
				check_status_member_not_found();
			}
			if (res.data.status == 'Member Not Active') {
				check_status_member();
			}
			/* end check */

			total_cart = res.data.total_cart;
			$rootScope.total_cart = total_cart;
			$rootScope.total_message = res.data.total_message;
			$rootScope.total_chat_product = res.data.total_chat_product;
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller("inforekeningController", function($scope, $state, $http, $ionicLoading,$window) {
	//get_info
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === "undefined") {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show()
	var link = base_url+"get_info";
	$http({
		method : 'POST',
		url    : link,
		data   : {
			customer_id : window.localStorage['customer_id'],
			token       : token
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.kontak = res.data.kontak;
		$scope.info = res.data.info;
		$scope.rekening = res.data.rekening;
		$scope.no_wa = res.data.no_wa;
		$scope.tipe_customer = res.data.status_harga_customer;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.toWhatsapp = function() {
		var link = 'https://wa.me/62' + $scope.no_wa;
		window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
	}
})
.controller('pengaturanController', function($scope, $state, $http, $ionicLoading,$ionicPopup,$window,$ionicHistory, $window) {
	$scope.customer_id = localStorage.getItem('customer_id');
	if (localStorage.getItem('customer_id') === null) {
		$state.go('eventmenu.login');
	}

	$ionicLoading.show();
	var link = base_url + 'get_customer_info';
	$http({
		method  : 'POST',
		url     : link,
		data    : {
			customer_id:localStorage.getItem('customer_id'),
			token:token
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.customer_name = res.data.customer.name;
		$scope.phone = res.data.customer.phone;
		$scope.email = res.data.customer.email;
		$scope.point = res.data.customer.point;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.editProfil = function  () {
		$state.go('eventmenu.editprofil');
	}

	$scope.logout = function  () {
		var confirmPopup = $ionicPopup.confirm({
			title: 'Logout',
			template: 'Anda Yakin Keluar Aplikasi ?'
		});

		confirmPopup.then(function(res) {
			if (res) {
				$window.localStorage.clear();
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				document.location.href = 'index.html';
			}
		});
	}

})
.controller('editprofilController', function($scope, $http, $ionicLoading, $ionicPopup, $window) {
	$scope.postData = {};

	$ionicLoading.show();
	var link = base_url + 'get_customer_info';
	$http({
		method : 'POST',
		url    : link,
		data   : {
			customer_id : window.localStorage['customer_id'],
			token       : token
		},
		timeout: 25000,
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.postData.id       = res.data.customer.id;
		$scope.postData.nama     = res.data.customer.name;
		$scope.postData.email    = res.data.customer.email;
		$scope.postData.phone    = res.data.customer.phone;
		var notif = res.data.customer.notif.split('|');
		$scope.notif = {
			confirm: notif.includes('confirm'),
			order_status: notif.includes('order_status'),
			resi: notif.includes('resi'),
		};
	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	$scope.submit_edit_profile = function () {
		var nama             = $scope.postData.nama;
		var email            = $scope.postData.email;
		var phone            = $scope.postData.phone;
		var password         = $scope.postData.password;
		var confirm_password = $scope.postData.confirm_password;

		var notif = [];
		if ($scope.notif.confirm) {
			notif.push('confirm');
		}
		if ($scope.notif.order_status) {
			notif.push('order_status');
		}
		if ($scope.notif.resi) {
			notif.push('resi');
		}

		var message = '';
		if (!nama) {
			message = 'Nama harus diisi';
		} else if (!email) {
			message = 'Email harus diisi';
		} else if (!validateEmail(email)) {
			message = 'Email tidak valid';
		} else if (!phone) {
			message = 'No. Telepon harus diisi';
		} else if (password !== confirm_password) {
			message = 'Password dan konfirmasi password tidak sesuai'
		}

		if (message) {
			$ionicPopup.alert({
				title: 'Info',
				template: message,
			});
			return;
		}

		$ionicLoading.show();
		var link = base_url + 'update_profile';

		$http({
			method : 'POST',
			url : link,
			data : {
				customer_id: localStorage.getItem('customer_id'),
				token: token,
				nama: nama,
				email: email,
				phone: phone,
				password: password,
				notif: notif.join('|')
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			var alertPopup = $ionicPopup.confirm({
				title: 'Notifikasi',
				template: res.data.status
			});

			localStorage.setItem('customer_email', email);
			localStorage.setItem('customer_name', nama);

			alertPopup.then(function(res) {
				if (res) {
					document.location.href = 'index.html';
					$timeout( function() {
						$window.location.reload(true);
					}, 1000);
				}
			});
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})

.controller('katalogSearchController', function($scope, $state, $ionicPopup, $http, $ionicLoading, productService, $ionicScrollDelegate, $rootScope) {

	$scope.detailBarang = function  (id) {
		productService.selectedProduct = id;
		$state.go('eventmenu.detailbarang');
	}

	$scope.moreDataCanBeLoaded = function () {
		return true;
	}
	$scope.loadMoreData = function() {
		$ionicLoading.show();
		$rootScope.searchPage += 1;
		$http({
			method  : 'POST',
			url     : base_url + 'get_search_product_v2',
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token,
				q           : $rootScope.keyword,
				page        : $rootScope.searchPage,
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			var json = res.data;
			if (json) {
				if (json.product) {
					if ($rootScope.katalog.length < parseInt(json.total_product)) {
						for (var x = 0; x < json.product.length; x++) {
							img_thumbnail = json.product[x].img_thumbnail;
							$rootScope.katalog.push({
								product_id    : json.product[x].product_id,
								name_item     : json.product[x].name_item,
								harga         : json.product[x].harga,
								img_medium    : json.product[x].img_medium,
								harga_lama    : json.product[x].harga_lama,
								discount   	  : json.product[x].discount,
								tag           : json.product[x].tag,
							});
						}
						$rootScope.moredataSearch = true;
					} else {
						$ionicPopup.alert({
							title: "Alert",
							template: "No More Data"
						});
						$rootScope.moredataSearch = false;
					}
				} else {
					$ionicPopup.alert({
						title: "Alert",
						template: "No More Data"
					});
					$rootScope.moredataSearch = false;
				}
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	var scroll = document.getElementById('ion-scroll-search');
	scroll.addEventListener('scroll', function() {
		var toTop = document.getElementById('to-top-search');
		if (scroll.scrollTop > 100) {
			toTop.style.display = 'flex';
		} else {
			toTop.style.display = 'none';
		}
	});
	$scope.toTop = function() {
		$ionicScrollDelegate.scrollTop(true);
	}
})

.controller("katalogPreOrderController", function($scope, $state, $ionicPopup, $http, $ionicLoading, productService, $ionicScrollDelegate) {
	$ionicLoading.show();
	$http({
		method  : 'POST',
		url     : base_url + 'get_list_product_v2',
		data    : {
			customer_id : window.localStorage['customer_id'],
			token       : token,
			category    : 'preorder',
			page        : 1,
		},
		timeout: 25000
	}).then(
	function(res) {
		$scope.status = res.data.status;
		if (res.data.status == 'Success') {
			$ionicLoading.hide();
			$scope.katalog = res.data.product;
		} else {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: "Alert",
				template: "Produk Kosong"
			});
		}
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.detailBarang = function  (id) {
		productService.selectedProduct = id;
		page = 1;
		$state.go('eventmenu.detailKatalog');
	}

	$scope.moreDataCanBeLoaded = function () {
		return true;
	}
	$scope.loadMoreData = function() {
		$ionicLoading.show();
		page += 1;
		var link = base_url+'get_list_product_v2';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id : window.localStorage['customer_id'],
				token       : token,
				q           : keyword,
				page        : page,
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			var json = res.data;
			if (json != null) {
				if (json.status != "Failed") {
					if ($scope.katalog.length < json.total_product) {
						for (var x = 0; x < json.product.length; x++) {
							img_thumbnail = json.product[x].img_thumbnail;
							$scope.katalog.push({
								product_id    : json.product[x].product_id,
								name_item     : json.product[x].name_item,
								harga         : json.product[x].harga,
								img_medium    : json.product[x].img_medium,
								harga_lama    : json.product[x].harga_lama,
								discount   	  : json.product[x].discount,
								tag           : json.product[x].tag,
							});
						}
						$scope.moredata = true;
						$scope.$broadcast('scroll.infiniteScrollComplete');
					} else {
						$ionicPopup.alert({
							title: "Alert",
							template: "No More Data"
						});
					}
				} else {
					$ionicPopup.alert({
						title: "Alert",
						template: "No More Data"
					});
				}
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
	var scroll = document.getElementById('ion-scroll-po');
	scroll.addEventListener('scroll', function() {
		var toTop = document.getElementById('to-top-po');
		if (scroll.scrollTop > 100) {
			toTop.style.display = 'flex';
		} else {
			toTop.style.display = 'none';
		}
	});
	$scope.toTop = function() {
		$ionicScrollDelegate.scrollTop(true);
	}
})

.controller("updateController", function($scope, $state, $http, $ionicLoading) {
})

.controller("notifikasiController", function($scope, $state, $http, $ionicLoading) {
	$scope.message = message_notif;
})

.controller("faqController", function($scope, $http, $ionicLoading,$window,$sce) {
	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === "undefined") {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$ionicLoading.show();
	var link = base_url+'get_faq';
	$http({
		method : 'POST',
		url    : link,
		data   : {
			customer_id  : window.localStorage['customer_id'],
			token        : token
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.faq = $sce.trustAsHtml(res.data.value);
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});
})

.controller('caraOrderController', function($scope, $http, $ionicLoading, dataService, $state) {
	$ionicLoading.show();
	var link = base_url + 'cara_order';
	$http({
		method : 'POST',
		url    : link,
		data   : {
			customer_id  : window.localStorage['customer_id'],
			token        : token
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
    $scope.cara_order = res.data;
	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
  });

  $scope.toDetail = function(cara_order) {
    dataService.cara_order = cara_order;
    $state.go('eventmenu.cara_order_detail');
  }
})

.controller('caraOrderDetailController', function($scope, dataService, $sce) {
  var cara_order = dataService.cara_order;
  $scope.title = cara_order.title;
  $scope.content = $sce.trustAsHtml(cara_order.content);
})

.controller('cekongkirController', function($scope, $state, $http, $ionicLoading, dataPesananService) {
	$scope.postData = {};
	var customer_id = localStorage.getItem('customer_id');
	$ionicLoading.show();
	var url = base_url + 'cities';
	var data = {
		token: token,
		customer_id: customer_id
	};
	$http.post(url, data, { timeout: 25000 }).then(function (response) {
		var data = response.data;
		for (var i = 0; i < data.length; i++) {
			if (data[i].type == 'Kabupaten') {
				var type = 'Kab. ';
			} else {
				var type = 'Kota ';
			}
			data[i]['name'] = type + data[i].city_name;
		}
		$scope.autocompleteKotaDari.searchlist = response.data;
		$scope.$root.$broadcast($scope.autocompleteKotaDari.ID);

		$scope.autocompleteKotaKe.searchlist = response.data;
		$scope.$root.$broadcast($scope.autocompleteKotaKe.ID);

		$ionicLoading.hide();
	}, function () {
		$scope.autocompleteKotaDari.searchlist = undefined;
		$scope.$root.$broadcast($scope.autocompleteKotaDari.ID);

		$scope.autocompleteKotaKe.searchlist = undefined;
		$scope.$root.$broadcast($scope.autocompleteKotaKe.ID);
	});

	$scope.autocompleteKotaDari = {
		'propNameToDisplay': 'name',
		'placeholder': 'Kota Pengiriman',
		'ID':'DataKotaDari',
		'listClass': ['list-border-energized'],
		'labelContainerClass': ['bottom-border']
	};

	$scope.autocompleteKotaKe = {
		'propNameToDisplay': 'name',
		'placeholder': 'Kota Tujuan',
		'ID':'DataKotaKe',
		'listClass': ['list-border-energized'],
		'labelContainerClass': ['bottom-border']
	};

	$scope.getKotaDari = function (item) {
		if (item) {
			if (item.type == 'Kabupaten') {
				var type = 'Kab. ';
			} else {
				var type = 'Kota ';
			}
			$scope.kota_asal_id = item.city_id;
			$scope.kota_asal_name = type + item.city_name;
		}
	};

	$scope.getKotaKe = function (item) {
		if (item) {
			if (item.type == 'Kabupaten') {
				var type = 'Kab. ';
			} else {
				var type = 'Kota ';
			}
			$scope.kota_tujuan_id = item.city_id;
			$scope.kota_tujuan_name = type + item.city_name;
		}
	};
	$scope.autocompleteKotaDari.itemSelectCallback = $scope.getKotaDari;
	$scope.autocompleteKotaKe.itemSelectCallback = $scope.getKotaKe;
	//END AUTO COMPLETE

	$scope.reset = function() {
		document.getElementById('DataKotaDari').value = '';
		document.getElementById('DataKotaKe').value = '';
		$scope.postData.berat = '';
	}
	$scope.cekongkir = function() {
		dataPesananService.kota_asal_id = $scope.kota_asal_id;
		dataPesananService.kota_asal_name = $scope.kota_asal_name;

		dataPesananService.kota_tujuan_id = $scope.kota_tujuan_id;
		dataPesananService.kota_tujuan_name = $scope.kota_tujuan_name;

		dataPesananService.berat = $scope.postData.berat;
		$state.go('eventmenu.cekongkirdetail');
	}
})

.controller('cekongkirdetailController', function($scope, $ionicPopup, $http, $ionicLoading, dataPesananService) {

	$scope.dataPesananService = dataPesananService;

	$scope.kota_asal_id = $scope.dataPesananService.kota_asal_id;
	$scope.kota_asal_name = $scope.dataPesananService.kota_asal_name;

	$scope.kota_tujuan_id = $scope.dataPesananService.kota_tujuan_id;
	$scope.kota_tujuan_name = $scope.dataPesananService.kota_tujuan_name;

	$scope.berat = $scope.dataPesananService.berat;
	getOngkirDetail();
	function getOngkirDetail() {
		$ionicLoading.show();
		var param = '?token=' + '8abf4902a0db27dcb7f62a01c2fd0d0a' + '&domain=' + 'ratuwedges.com' + '&origin_city_id=' + $scope.kota_asal_id + '&destination_id=' + $scope.kota_tujuan_id + '&destination_type=city&weight=' + $scope.berat + '&satuan=gram&courier=jne:pos:tiki:wahana:jnt:sicepat:lion';
		var link = base_url_api + '/cost' + param;
		$http({
			method : 'GET',
			url : link,
			data : {},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()

			$scope.data_ongkir = res.data.result;

		}, function(response) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Notifikasi',
				template: 'Koneksi Gagal',
				buttons: [{
					text: 'Retry',
					type: 'button-default',
					onTap: function(e) {
						getOngkirDetail();
					}
				}]
			});
		});
	}

	$scope.rupiah = function(value) {
		return 'Rp. ' + Number(value).toLocaleString('id');
	};
})

.controller("kategoriController", function($scope, $state, $http, $ionicLoading, productService, $ionicHistory) {
	$ionicLoading.show();
	$scope.sidemenu = [];

	var link = base_url+'get_list_product_category';
	$http({
		method  : 'POST',
		url     : link,
		data    : {
			customer_id : window.localStorage['customer_id'],
			token       : token
		},
		timeout: 25000
	}).then(
	function(res) {
		$scope.category = res.data;
		var json = res.data.category;
		for (var x = 0; x < json.length; x++) {
			$scope.sidemenu.push({
				id      : json[x].id,
				name    : json[x].name,
				icon    : "",
				target  : "",
				status  : "enabled",
				click   : "filterCategory("+json[x].id+",'"+json[x].name+"')"
			});
		}
		$ionicLoading.hide()
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.filterCategory = function (id,name) {
		category = id;
		page = 1;

		productService.category = id;
		productService.categoryName = name;
		productService.page = page;

		$ionicHistory.clearCache().then(function() {
			$ionicHistory.nextViewOptions({
				disableBack: true
			});
			$state.go('eventmenu.dashboardCategory', {}, {reload: true});
		});
	}
})

.controller('updateController', function($scope, $state, $http, $ionicLoading) {
})

.controller('notifikasiController', function($scope, $state, $http, $ionicLoading) {
	$scope.message = message_notif;
})

.controller('detailKatalogController', function($scope, $state, $ionicActionSheet, $http, $ionicLoading, $window, $ionicPopup, $rootScope, $timeout, productService,$ionicSlideBoxDelegate, member) {
	$scope.productService = productService;
	$scope.postDataOrder = {};
	var array_image = [];
	$scope.slideboxStyle = false;

	$scope.customer_name = $window.localStorage['customer_name'];
	$scope.customer_id = $window.localStorage['customer_id'];

	if (typeof $scope.customer_id === 'undefined') {
		$scope.isLogin = false;
	} else {
		$scope.isLogin = true;
	}

	$scope.changeSlider = function(index) {
		$scope.$broadcast('slideBox.setSlide', index);
	}

	get_detail_product();

	function get_detail_product() {
		$ionicLoading.show()
		var link = base_url + 'get_detail_product';
		$http({
			method  : 'POST',
			url     : link,
			data    : {
				customer_id   : window.localStorage['customer_id'],
				product_id    : productService.selectedProduct,
				token         : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.product_name           = res.data.name_item;
			$scope.product_harga          = res.data.harga;
			$scope.product_harga_formated = toRp(res.data.harga);
			$scope.product_keterangan     = res.data.keterangan;

			$scope.product_keterangan     = res.data.keterangan;
			$scope.bahan                  = res.data.bahan;
			$scope.model                  = res.data.model;
			$scope.warna                  = res.data.warna;
			$scope.panjang                = res.data.panjang;
			$scope.ukuran                 = res.data.ukuran;
			$scope.lingkar_pinggang       = res.data.lingkar_pinggang;
			$scope.img_url                = res.data.img_large;

			$scope.product_min_order      = res.data.min_order;
			$scope.product_id             = res.data.product_id;
			$scope.product_harga_lama     = res.data.harga_lama;
			$scope.product_img_large      = res.data.img_large;
			$scope.product_img_medium     = res.data.img_medium;
			$scope.product_img_thumbnail  = res.data.img_thumbnail;
			$scope.product_type           = res.data.product_type;
			$scope.tipe                   = res.data.product_type;

			$scope.list_image             = res.data.image_data;

			$scope.harga_grosir           = res.data.harga_grosir;

			$scope.tipe_customer          = res.data.status_harga_customer;
			$scope.list_variant           = res.data.variant;
			localStorage.setItem('status_member', res.data.status_member);

			$ionicSlideBoxDelegate.update();
			$timeout( function() {
				$scope.slideboxStyle = true;
			}, 500);

			for (var z = 0; z < res.data.image_data.length; z++) {
				array_image.push(res.data.image_data[z].foto);
			}

			for (i = 0; i < $scope.list_variant.length; i++) {
				angular.element(document.querySelector('#qty_' + i)).val(" ");
			}
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});

		getCartTotal();

		function getCartTotal() {
			$ionicLoading.show();
			var url = base_url + 'get_cart_total';
			$http({
				method  : 'POST',
				url     : url,
				data    : {
					customer_id : window.localStorage['customer_id'],
					token       : token
				},
				timeout: 25000
			}).then(
			function(res) {
				$ionicLoading.hide()
				/* check */
				if (res.data.status == 'Invalid Token') {
					check_token();
				}
				if (res.data.status == 'OFF') {
					check_status_aplikasi(res.data.message);
				}
				if (res.data.status == 'Member Not Found') {
					check_status_member_not_found();
				}
				if (res.data.status == 'Member Not Active') {
					check_status_member();
				}
				/* end check */

				total_cart = res.data.total_cart;
				$rootScope.total_cart = total_cart;
				$rootScope.total_message = res.data.total_message;
				$rootScope.total_chat_product = res.data.total_chat_product;
			}, function(response) {
				$ionicLoading.hide();
				alert('Failed to continue, please check your internet connection');
			});
		}
	}

	$scope.submit_order = function () {
		var variant_id = [];
		var qty = [];
		$scope.postData = {};
		$scope.array_jenis = [];
		for (i = 0; i < $scope.list_variant.length; i++) {
			var inputs1 = angular.element(document.querySelector('#qty_'+i));
			if (inputs1.val().length > 0) {
				variant_id.push($scope.list_variant[i].id_variant);
				qty.push(inputs1.val());
			}
		}

		if (variant_id.length == 0) {
			$ionicPopup.alert({
				title: 'Alert',
				template: 'Piih variant & qty yg anda inginkan terlebih dahulu'
			});
		} else {
			if (typeof window.localStorage['customer_id'] === "undefined") {
				$state.go('eventmenu.login');
			} else if (localStorage.getItem('status_member') != 'Active') {
				member.checkMember();
			} else {
				$ionicLoading.show()
				var link = base_url + 'process_order_item';
				$http({
					method  : 'POST',
					url     : link,
					data    : {
						customer_id : window.localStorage['customer_id'],
						token       : token,
						prod_id     : productService.selectedProduct,
						variant_id  : variant_id,
						qty         : qty,
						notes       : document.getElementById('note').value,
						ref			: ionic.Platform.platform()
					},
					timeout: 25000
				}).then(
				function(res) {
					$ionicLoading.hide();
					if (res.data.status == 'Success') {
						get_detail_product();
						getCartTotal();

						$ionicPopup.alert({
							title: res.data.status,
							template: res.data.message,
							buttons: [{
								text: 'OK',
								type: 'button-default',
								onTap: function(e) {
									$state.go('eventmenu.dashboard', {}, {reload: true});
								}
							}]
						});
					}
				}, function(response) {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}

		}
	}

	$scope.actionSaveImage = function() {
		$ionicActionSheet.show({
			buttons: [
			{ text: 'Save All Images' },
			{ text: 'Save Current Images' }
			],
			titleText: 'Select Save Image Options',
			cancelText: 'Cancel',
			cancel: function() {
				console.log('Canceled');
			},
			buttonClicked: function(index) {
				if (index === 0) {
					var img = $scope.list_image;

					var i = 0;
					function saveImage() {
						$ionicLoading.show();
						setTimeout(function() {
							$scope.save_image(img[i].foto,i);
							i++;
							if (i < img.length) {
								saveImage();
							} else {
								$ionicLoading.hide();
							}
						},800)
					}

					saveImage();

				} else if (index === 1) {
					$scope.save_image('',0);
				}
				return true;
			}
		});
	}

	$scope.save_image = function(url_file,i) {
		if (!url_file) {
			$scope.img_url = base_url_media+"/images/large/"+array_image[$ionicSlideBoxDelegate.currentIndex()];
		} else {
			$scope.img_url = base_url_media+"/images/large/"+url_file;
		}

		cordova.plugins.diagnostic.requestRuntimePermission(function(status) {
			switch(status) {
				case cordova.plugins.diagnostic.permissionStatus.GRANTED:

				break;
				case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:

				break;
				case cordova.plugins.diagnostic.permissionStatus.DENIED:

				break;
				case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:

				break;
			}
		}, function(error) {
			console.error("The following error occurred: "+error);
		}, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);
		cordova.plugins.diagnostic.registerPermissionRequestCompleteHandler(successCallback(i));
	}

	function successCallback(i) {
		download_lagi2($scope.img_url,i);
	}
	// SAVE IMAGE 3 //
	function download_lagi2(url,i) {
		$ionicLoading.show()
		setTimeout(function() {
			// Do something after 3 seconds
			var success = function(msg) {
				console.info(msg);
				var img_length = $scope.list_image.length - 1;
				if (i === img_length) {
					$ionicLoading.hide();
					alert('Image Successfully Downloaded');
				}
			};

			var error = function(err) {
				console.error(err);
				alert('message: '          + err);
				$ionicLoading.hide()
			};

			saveImageToPhone(url, success, error);
		}, 3000);
	}
	function saveImageToPhone(url, success, error) {
		var canvas, context, imageDataUrl, imageData;
		var img = new Image();
		img.onload = function() {
			canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			context = canvas.getContext('2d');
			context.drawImage(img, 0, 0);
			try {
				imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
				imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
				cordova.exec(
					success,
					error,
					'Canvas2ImagePlugin',
					'saveImageDataToLibrary',
					[imageData, url]
					);
			}
			catch(e) {
				error(e.message);
			}
		};
		try {
			img.src = url;
		}
		catch(e) {
			error("ero saveImageToPhone"+e.message);
		}
	}

})

.controller('chattingController', function($scope,$rootScope, $http, $ionicLoading, $timeout, $ionicScrollDelegate, $location, $anchorScroll, $ionicActionSheet, $cordovaDevice, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $ionicModal, $cordovaPhotoViewer, $ionicPopup) {

	$scope.data = {};
	$scope.list_image = [];
	$scope.multipleImage = false;
	var alternate,
	isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
	get_data();
	function get_data() {
		$ionicLoading.show()
		var link = base_url + 'get_chat';
		$http({
			method : 'POST',
			url  : link,
			data : {
				customer_id : window.localStorage['customer_id'],
				token       : token
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide()
			$scope.tiket = res.data;

			for (var i = 0; i < $scope.tiket.length; i++) {
				if ($scope.tiket[i].sender == 'Customer') {
					$scope.tiket[i].sender = localStorage.getItem('customer_name');
				}
			}

			$rootScope.total_chat = 0;

			$timeout(function() {
				$ionicScrollDelegate.scrollBottom(true);
			}, 300);
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.toWhatsapp = function() {
		var link = 'https://wa.me/62' + $rootScope.no_wa;
		window.open(link, '_system','location=yes,enableViewportScale=yes,hidden=no');
	}

	$scope.changeSlider = function(index) {
		$scope.$broadcast('slideBox.setSlide', index);
	}

	$scope.showFull = function(img) {
		$cordovaPhotoViewer.show([img], '', { share:false, index: 0 });
	}

	$scope.image = null;

	$scope.loadImage = function() {
		var hideSheet = $ionicActionSheet.show({
			buttons: [
			{ text: 'Pilih dari gallery' },
			{ text: 'Gunakan Kamera' },
			{ text: 'Pilih Multiple' },
			],
			titleText: 'Pilihan foto',
			cancelText: 'Batal',
			cancel: function() {
				console.log('Canceled');
			},
			buttonClicked: function(index) {
				var type = null;
				if (index === 0) {
					type = Camera.PictureSourceType.PHOTOLIBRARY;
				} else if (index === 1) {
					type = Camera.PictureSourceType.CAMERA;
			    } else if (index === 2) {
			    	type = 'multiple';
			    	window.imagePicker.getPictures(function(res) {
						for (var i = 0; i < res.length; i++) {
							$scope.list_image.push(res[i]);
							$scope.showModal(true);
						}
					}, function(er) {
						console.log(er)
					});
			    }
			    if (type !== null) {
			    	$scope.selectPicture(type);
			    	hideSheet();
			    }
			}
		});
	}

	$scope.selectPicture = function(sourceType) {
		var options = {
			quality: 30,
			destinationType: Camera.DestinationType.FILE_URI,
			sourceType: sourceType,
			saveToPhotoAlbum: false
		};

		$cordovaCamera.getPicture(options).then(function(imagePath) {
			// Grab the file name of the photo in the temporary directory
			var currentName = imagePath.replace(/^.*[\\\/]/, '');

			//Create a new name for the photo
			var d = new Date(),
				n = d.getTime(),
				newFileName = n + '.jpg';

			// If you are trying to load image from the gallery on Android we need special treatment!
			if ($cordovaDevice.platform == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
				window.FilePath.resolveNativePath(imagePath, function(entry) {
					window.resolveLocalFileSystemURL(entry, success, fail);
					function fail(e) {
						console.error('Error: ', e);
					}

					function success(fileEntry) {
						var size = getFileSize(fileEntry);
						if (size > 500) {
							$scope.showAlert('Error', 'Ukuran gambar maksimal 500 KB');
						} else {
							copyFile(fileEntry);
						}
					};

					function copyFile(fileEntry) {
						var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
						// Only copy because of access rights
						$cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success) {
							$scope.image = newFileName;
							$scope.showModal(false);
						}, function(error) {
							$scope.showAlert('Error', error.exception);
						});
					}

					function getFileSize(fileEntry) {
						fileEntry.file(function(file) {
							return file.size;
						}, function(er) {
							console.log(er);
							return false;
						});
					}
				});
			} else {
				var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
				// Move the file to permanent storage
				$cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success) {
					$scope.image = newFileName;
					$scope.showModal(false);
				}, function(error) {
					$scope.showAlert('Error', error.exception);
				});
			}
		},
		function(err) {
			// Not always an error, maybe cancel was pressed...
		})
	};

	$ionicModal.fromTemplateUrl('templates/modalImage.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}
	).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.imageChat = null;

	$scope.showModal = function(multipleImage) {
		$scope.modal.show();
		$scope.multipleImage = multipleImage;
		if (!multipleImage) {
			$scope.imageChat = $scope.pathForImage($scope.image);
		}
	}

	$scope.closeModal = function() {
		$scope.modal.hide();
	}

	$scope.pathForImage = function(image) {
		if (image === null) {
			return '';
		} else {
    		return cordova.file.dataDirectory + image;
		}
	};

	$scope.sendImageMultitple = function(message, image) {
		var d = new Date(),
			n = d.getTime(),
			newFileName = n + '.jpg';

		$ionicLoading.show();

		// Destination URL
		var url = base_url + 'reply_chat_image';

		var options = {
			fileKey: 'file',
			fileName: newFileName,
			chunkedMode: false,
			mimeType: 'multipart/form-data',
			params: {
				fileName : newFileName,
				customer_id : window.localStorage['customer_id'],
				message : message,
				token : token
			}
		};

		$cordovaFileTransfer.upload(url, image, options).then(function(result) {
			$ionicLoading.hide();
			var response = JSON.parse(result.response);
			if (response.status == 'Success') {
				$scope.modal.hide();
				$scope.message = '';
			} else {
				$ionicPopup.alert({
					title: 'Notifikasi',
					template: response.error,
				});
			}
		}, function(err) {
			$ionicLoading.hide();
			console.log(err)
		});
	}

	$scope.sendImageMessage = function(message) {
		if ($scope.multipleImage) {
			$scope.list_image.map(function(image, index) {
				var message_image = index == 0 ? message : '';
				$scope.sendImageMultitple(message_image, image);
				if ($scope.list_image.length - 1 == index) {
					get_data();
					$location.hash('bottom');
					$anchorScroll();
				}
			});
		} else {
			$ionicLoading.show();

			// Destination URL
			var url = base_url + 'reply_chat_image';

			// File for Upload
			var targetPath = $scope.pathForImage($scope.image);

			// File name only
			var filename = $scope.image;

			var options = {
				fileKey: 'file',
				fileName: filename,
				chunkedMode: false,
				mimeType: 'multipart/form-data',
				params: {
					fileName : filename,
					customer_id : window.localStorage['customer_id'],
					message : message,
					token : token
				}
			};

			$cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
				$ionicLoading.hide();
				var response = JSON.parse(result.response);
				if (response.status == 'Success') {
					$scope.modal.hide();
					$scope.message = '';
					get_data();
					$location.hash('bottom');
					$anchorScroll();
				} else {
					$ionicPopup.alert({
						title: 'Notifikasi',
						template: response.error,
					});
				}
			}, function(err) {
				$ionicLoading.hide();
				console.log(err)
			});
		}
	}

	$scope.sendMessage = function() {
		alternate = !alternate;
		$ionicLoading.show();
		var link = base_url + 'kirim_balasan';
		$http({
			method : 'POST',
			url    : link,
			data   : {
				customer_id : window.localStorage['customer_id'],
				token       : token,
				balasan     : $scope.data.message
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.data.message = '';
			get_data();
			$location.hash('bottom');
			$anchorScroll();
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		    });

		delete $scope.data.message;
		$ionicScrollDelegate.scrollBottom(true);
	};

	$scope.inputUp = function() {
		if (isIOS) $scope.data.keyboardHeight = 216;
		$timeout(function() {
			$ionicScrollDelegate.scrollBottom(true);
		}, 300);
	};

	$scope.inputDown = function() {
		if (isIOS) $scope.data.keyboardHeight = 0;
		$ionicScrollDelegate.resize();
	};

	$scope.data = {};
	$scope.myId = '12345';
	$scope.messages = [];
})

.controller('listChatProductController', function($scope, $state, $http, $ionicLoading, productService) {
	$ionicLoading.show();
	var link = base_url + 'get_list_chat_product';
	$http({
		method : 'POST',
		url    : link,
		data   : {
			customer_id: localStorage.getItem('customer_id'),
			token: token,
			page: 1
		},
		timeout: 25000
	}).then(
	function(res) {
		$ionicLoading.hide();
		$scope.list_chat_product = res.data;
	}, function(response) {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.detailChat = function(id) {
		productService.product_id = id;
		$state.go('eventmenu.chatProduct');
	}
})

.controller('chatProductController', function($scope, $rootScope, $state, $http, $ionicLoading, $timeout, $ionicScrollDelegate, $location, $anchorScroll, productService) {
	$scope.data = {};
	var alternate,
	isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();
	get_data();
	function get_data() {
		$ionicLoading.show()
		var link = base_url + 'get_product_chat';
		$http({
			method : 'POST',
			url  : link,
			data : {
				customer_id : localStorage.getItem('customer_id'),
				prod_id : productService.product_id,
				token : token,
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.product = res.data.product;
			$scope.chat = res.data.chat_product;

			for (var i = 0; i < $scope.chat.length; i++) {
				if ($scope.chat[i].sender == 'Customer') {
					$scope.chat[i].sender = localStorage.getItem('customer_name');
				}
			}

			$rootScope.total_chat_product = 0;

			$timeout(function() {
				$ionicScrollDelegate.scrollBottom(true);
			}, 300);
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.detailbarang = function() {
		productService.selectedProduct = $scope.product.id;
		$state.go('eventmenu.detailbarang');
	}

	$scope.sendMessage = function() {
		alternate = !alternate;
		$ionicLoading.show();
		var link = base_url + 'reply_chat_product';
		$http({
			method : 'POST',
			url    : link,
			data   : {
				customer_id : localStorage.getItem('customer_id'),
				token       : token,
				content     : $scope.data.message,
				prod_id     : $scope.product.id,
			},
			timeout: 25000
		}).then(
		function(res) {
			$ionicLoading.hide();
			$scope.data.message = '';
			delete $scope.data.message;
			get_data();
			$location.hash('bottom');
			$anchorScroll();
		}, function(response) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
		$ionicScrollDelegate.scrollBottom(true);
	};

	$scope.inputUp = function() {
		if (isIOS) $scope.data.keyboardHeight = 216;
		$timeout(function() {
			$ionicScrollDelegate.scrollBottom(true);
		}, 300);
	};

	$scope.inputDown = function() {
		if (isIOS) $scope.data.keyboardHeight = 0;
		$ionicScrollDelegate.resize();
	};

	$scope.data = {};
	$scope.myId = '12345';
	$scope.messages = [];
})

.controller('forgetController', function($scope, $state, $http, $ionicLoading, $ionicPopup, $ionicHistory ) {
	$scope.forget = function(email) {
		$ionicLoading.show();
		var url = base_url + 'forget';
		var data = {
			token : token,
			email : email
		}
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			if (res.data.status == 'Success') {
				$ionicPopup.alert({
					title: res.data.status,
					template: res.data.message,
					buttons: [{
						text: 'OK',
						type: 'button-default',
						onTap: function(e) {
							$ionicHistory.clearCache().then(function() {
								$ionicHistory.nextViewOptions({
									disableBack: true
								});
								var langsung_dashboard = localStorage.getItem('langsung_dashboard');
								if (langsung_dashboard == 'ON') {
									$state.go('eventmenu.dashboard', {}, {reload: true});
								} else {
									$state.go('login');
								}
							});
						}
					}]
				});
			} else {
				$ionicPopup.alert({
					title: res.data.status,
					template: res.data.message,
				});
			}

		}, function(err) {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('addressController', function($scope, $state, $http, $ionicLoading, $ionicPopup, dataService) {
	$ionicLoading.show();

	$scope.getAddress = function() {
		var url = base_url + 'addresses';
		var data = {
			token: token,
			customer_id: localStorage.getItem('customer_id')
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$scope.addresses = res.data;
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.getAddress();

	$scope.edit = function(id) {
		$state.go('eventmenu.editAddress', { id: id });
	}

	$scope.delete = function(id, index) {
		var confirmPopup = $ionicPopup.confirm({
			title      : 'Konfirmasi',
			template   : 'Hapus Alamat Pengiriman ?',
		});

		confirmPopup.then(function(x) {
			if (x) {
				$ionicLoading.show();
				var url = base_url + 'delete_address';
				var data = {
					token: token,
					customer_id: localStorage.getItem('customer_id'),
					address_id: id
				};
				$http.post(url, data, { timeout : 25000 }).then(function(res) {
					$ionicLoading.hide();
					$scope.addresses.splice(index, 1);
					$ionicPopup.alert({
						title: 'Info',
						template: 'Alamat pengiriman berhasil dihapus',
					});
				}, function() {
					$ionicLoading.hide();
					alert('Failed to continue, please check your internet connection');
				});
			}
		});
	}

	$scope.copy = function(index) {
		var textArea = document.createElement('textarea');
		var address = $scope.addresses[index];
		var text = 'Penerima: ' + address.recipient_name + ' - ' + address.recipient_phone + '\n'
					+ address.address + '\n'
					+ address.subdistrict_name + ' - ' + address.type + ' '  + address.city_name + '\n'
					+ address.province + '\n'
					+ 'Kode POS ' + address.postal_code + '\n'
					+ 'Pengirim ' + address.sender;
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		try {
			document.execCommand('copy');
			$ionicLoading.show({
				template: 'Alamat berhasil di copy ke clipboard',
				duration: 1000,
				noBackdrop : true
			});
		} catch (err) {
			console.error('Fallback: Oops, unable to copy', err);
		}

		document.body.removeChild(textArea);
	}
})
.controller('addAddressController', function($scope, $ionicHistory, $http, $ionicLoading, $ionicPopup, dataService) {
	var customer_id = localStorage.getItem('customer_id');
	$scope.provinces = [];
	$scope.cities = [];
	$scope.subdistricts = [];
	$scope.postData = {
		recipient_name: '',
		recipient_phone: '',
		address: '',
		province_id: '',
		city_id: '',
		subdistrict_id: '',
		postal_code: '',
		sender: ''
	};

	if (dataService.address) {
		var address = dataService.address;
		$scope.postData = {
			recipient_name: address.recipient_name,
			recipient_phone: address.recipient_phone,
			address: address.address,
			province_id: address.province_id,
			city_id: address.city_id,
			subdistrict_id: address.subdistrict_id,
			postal_code: Number(address.postal_code),
			sender: address.sender
		};
	}

	$ionicLoading.show();
	var url = base_url + 'provinces';
	var data = {
		token: token,
		customer_id: customer_id
	};
	$http.post(url, data, { timeout : 25000 }).then(function(res) {
		$ionicLoading.hide();
		$scope.provinces = res.data;
		if (dataService.address) {
			$scope.postData.province_id = dataService.address.province_id;
			$scope.getCity(dataService.address.province_id);
		}
	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});

	$scope.getCity = function(province_id) {
		$ionicLoading.show();
		var url = base_url + 'cities';
		var data = {
			token: token,
			customer_id: customer_id,
			province_id: province_id
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$scope.cities = res.data;
			$scope.postData.city_id = '';
			$scope.postData.subdistrict_id = '';
			if (dataService.address) {
				$scope.postData.city_id = dataService.address.city_id;
				$scope.getSubdistrict(dataService.address.city_id);
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.getSubdistrict = function(city_id) {
		$ionicLoading.show();
		var url = base_url + 'subdistricts';
		var data = {
			token: token,
			customer_id: customer_id,
			city_id: city_id
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$scope.subdistricts = res.data;
			$scope.postData.subdistrict_id = '';
			if (dataService.address) {
				$scope.postData.subdistrict_id = dataService.address.subdistrict_id;
			}
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.save = function() {
		var message = '';
		if (!$scope.postData.recipient_name) {
			message = 'Nama penerima harus diisi';
		} else if (!$scope.postData.recipient_phone) {
			message = 'No. Telepon harus diisi';
		} else if (!$scope.postData.address) {
			message = 'Alamat harus diisi';
		} else if (!$scope.postData.province_id) {
			message = 'Provinsi harus diisi';
		} else if (!$scope.postData.city_id) {
			message = 'Kota / Kabupaten harus diisi';
		} else if (!$scope.postData.subdistrict_id) {
			message = 'Kecamatan harus diisi';
		} else if (!$scope.postData.postal_code) {
			message = 'Kode POS harus diisi';
		} else if (!$scope.postData.sender) {
			message = 'Pengirim harus diisi';
		}

		if (message) {
			$ionicPopup.alert({
				title: 'Info',
				template: message,
			});
			return;
		}

		$ionicLoading.show();
		var url = base_url + 'add_address';
		var data = {
			token: token,
			customer_id: customer_id,
			recipient_name: $scope.postData.recipient_name,
			recipient_phone: $scope.postData.recipient_phone,
			address: $scope.postData.address,
			province_id: $scope.postData.province_id,
			city_id: $scope.postData.city_id,
			subdistrict_id: $scope.postData.subdistrict_id,
			postal_code: Number($scope.postData.postal_code),
			sender: $scope.postData.sender
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Info',
				template: res.data.message,
			});
			$ionicHistory.goBack();
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.controller('editAddressController', function($scope, $ionicHistory, $http, $ionicLoading, $ionicPopup, $stateParams) {
	var customer_id = localStorage.getItem('customer_id');
	$scope.provinces = [];
	$scope.cities = [];
	$scope.subdistricts = [];
	$scope.postData = {
		recipient_name: '',
		recipient_phone: '',
		address: '',
		province_id: '',
		city_id: '',
		subdistrict_id: '',
		postal_code: '',
		sender: ''
	};

	$ionicLoading.show();
	var url = base_url + 'address_detail';
	var data = {
		token: token,
		customer_id: customer_id,
		id: $stateParams.id
	};
	$http.post(url, data, { timeout : 25000 }).then(function(res) {
		$ionicLoading.hide();
		$scope.provinces = res.data.provinces;
		$scope.cities = res.data.cities;
		$scope.subdistricts = res.data.subdistricts;
		var address = res.data.address;
		$scope.postData = {
			recipient_name: address.recipient_name,
			recipient_phone: address.recipient_phone,
			address: address.address,
			province_id: address.province_id,
			city_id: address.city_id,
			subdistrict_id: address.subdistrict_id,
			postal_code: Number(address.postal_code),
			sender: address.sender
		};
	}, function() {
		$ionicLoading.hide();
		alert('Failed to continue, please check your internet connection');
	});


	$scope.getCity = function(province_id) {
		$ionicLoading.show();
		var url = base_url + 'cities';
		var data = {
			token: token,
			customer_id: customer_id,
			province_id: province_id
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$scope.cities = res.data;
			$scope.postData.city_id = '';
			$scope.postData.subdistrict_id = '';
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.getSubdistrict = function(city_id) {
		$ionicLoading.show();
		var url = base_url + 'subdistricts';
		var data = {
			token: token,
			customer_id: customer_id,
			city_id: city_id
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$scope.subdistricts = res.data;
			$scope.postData.subdistrict_id = '';
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}

	$scope.save = function() {
		var message = '';
		if (!$scope.postData.recipient_name) {
			message = 'Nama penerima harus diisi';
		} else if (!$scope.postData.recipient_phone) {
			message = 'No. Telepon harus diisi';
		} else if (!$scope.postData.address) {
			message = 'Alamat harus diisi';
		} else if (!$scope.postData.province_id) {
			message = 'Provinsi harus diisi';
		} else if (!$scope.postData.city_id) {
			message = 'Kota / Kabupaten harus diisi';
		} else if (!$scope.postData.subdistrict_id) {
			message = 'Kecamatan harus diisi';
		} else if (!$scope.postData.postal_code) {
			message = 'Kode POS harus diisi';
		} else if (!$scope.postData.sender) {
			message = 'Pengirim harus diisi';
		}

		if (message) {
			$ionicPopup.alert({
				title: 'Info',
				template: message,
			});
			return;
		}

		$ionicLoading.show();
		var url = base_url + 'update_address';
		var data = {
			token: token,
			customer_id: customer_id,
			id: $stateParams.id,
			recipient_name: $scope.postData.recipient_name,
			recipient_phone: $scope.postData.recipient_phone,
			address: $scope.postData.address,
			province_id: $scope.postData.province_id,
			city_id: $scope.postData.city_id,
			subdistrict_id: $scope.postData.subdistrict_id,
			postal_code: Number($scope.postData.postal_code),
			sender: $scope.postData.sender
		};
		$http.post(url, data, { timeout : 25000 }).then(function(res) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: 'Info',
				template: res.data.message,
			});
			$ionicHistory.goBack();
		}, function() {
			$ionicLoading.hide();
			alert('Failed to continue, please check your internet connection');
		});
	}
})
.directive('input', function($timeout) {
	return {
		restrict: 'E',
		scope: {
			'returnClose': '=',
			'onReturn': '&',
			'onFocus': '&',
			'onBlur': '&'
		},
		link: function(scope, element, attr) {
			element.bind('focus', function(e) {
				if (scope.onFocus) {
					$timeout(function() {
						scope.onFocus();
					});
				}
			});
			element.bind('blur', function(e) {
				if (scope.onBlur) {
					$timeout(function() {
						scope.onBlur();
					});
				}
			});
			element.bind('keydown', function(e) {
				if (e.which == 13) {
					if (scope.returnClose) element[0].blur();
					if (scope.onReturn) {
						$timeout(function() {
							scope.onReturn();
						});
					}
				}
			});
		}
	}
})


;
