(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-card/bee-card.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-card/bee-card.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bee-card\" [ngStyle]=\"{paddingTop: height ? height : ''}\">\r\n    <div class=\"bee-card-body\" *ngIf=\"!full\">\r\n        <div class=\"bee-card-content\" [ngStyle]=\"{float: position === 'left' ? 'left' : 'right', alignItems: position === 'left' ? 'flex-start' : 'flex-end'}\">\r\n            <div class=\"content\">\r\n                <div class=\"title\" [innerHTML]=\"title\"></div>\r\n                <div [innerHTML]=\"description\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"bee-card-cover\" [ngStyle]=\"{float: position === 'left' ? 'right' : 'left'}\">\r\n            <img [src]=\"cover ? host + cover : '../../../assets/image/no-cover.svg'\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"bee-card-body2\" *ngIf=\"full\">\r\n        <div class=\"bee-card-content2\">\r\n            <div class=\"content2\">\r\n                <div class=\"title\" [innerHTML]=\"title\"></div>\r\n                <div [innerHTML]=\"description\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"bee-card-cover2\">\r\n            <img [src]=\"cover ? host + cover : '../../../assets/image/no-cover.svg'\">\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-footer/bee-footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-footer/bee-footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bee-footer\">\r\n    <span *ngIf=\"loading\">{{site.copyright}} {{site.icp}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-media/bee-media.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-media/bee-media.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orh-media\">\r\n    <div class=\"orh-media-content1\" *ngIf=\"!autoplay\">\r\n        <img class=\"orh-media-cover\" [src]=\"cover\">\r\n    </div>\r\n    <div class=\"orh-media-content\" *ngIf=\"autoplay\">\r\n        <vg-player (onPlayerReady)=\"onPlayerReady($event)\">\r\n            <vg-overlay-play vgFor=\"my-video\"></vg-overlay-play>\r\n            <vg-buffering></vg-buffering>\r\n\r\n            <vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\"3\" class=\"orh-media-controls\" #controls>\r\n                <vg-time-display class=\"orh-media-time\" vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n                <vg-scrub-bar class=\"orh-media-progress\">\r\n                    <vg-scrub-bar-current-time class=\"orh-media-current\" [vgSlider]=\"true\"></vg-scrub-bar-current-time>\r\n                    <vg-scrub-bar-buffering-time class=\"orh-media-buffering\"></vg-scrub-bar-buffering-time>\r\n                </vg-scrub-bar>\r\n\r\n                <div class=\"orh-media-speed\" [ngStyle]=\"{ bottom: speedBottom }\">\r\n                    <vg-scrub-bar class=\"orh-media-speed-progress\">\r\n                        <vg-scrub-bar-current-time class=\"orh-media-speed-current\" [vgSlider]=\"true\"></vg-scrub-bar-current-time>\r\n                        <vg-scrub-bar-buffering-time class=\"orh-media-speed-buffering\"></vg-scrub-bar-buffering-time>\r\n                    </vg-scrub-bar>\r\n                </div>\r\n\r\n                <vg-time-display class=\"orh-media-time\" vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n                <vg-fullscreen class=\"orh-media-fullscreen\" [ngStyle]=\"{backgroundImage: backgroundImage}\"></vg-fullscreen>\r\n            </vg-controls>\r\n\r\n            <video #myMedia [vgMedia]=\"myMedia\"\r\n                   id=\"my-video\" preload=\"auto\"\r\n                   [poster]=\"poster\"\r\n                   playsinline webkit-playsinline [autoplay]=\"play\">\r\n                <source [src]=\"url\" type=\"video/mp4\">\r\n            </video>\r\n        </vg-player>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-nav/bee-nav.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-nav/bee-nav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bee-nav\">\r\n    <div class=\"bee-nav-content\">\r\n        <div class=\"logo\">\r\n            <img src=\"../../../assets/image/logo.png\" (click)=\"logoClikc()\">\r\n        </div>\r\n        <div class=\"nav\">\r\n            <div class=\"nav-item\" (click)=\"navChange2()\">\r\n                {{ handleLabel('ᠲᠡᠷᠢᠭᠦᠨ ᠨᠢᠭᠤᠷ') }}\r\n            </div>\r\n\r\n            <div class=\"nav-item\" *ngFor=\"let item of data; let i = index;\">\r\n\r\n                {{ item.name }}\r\n\r\n                <div class=\"nav-item-child\" *ngIf=\"item.son.length\">\r\n\r\n                    <div class=\"nav-item-child-item\" *ngFor=\"let el of item.son;\" (click)=\"navChange(item, el)\">\r\n\r\n                        {{ el.name }}\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"nav-item\">\r\n\r\n                {{ handleLabel('ᠠᠵᠢᠯ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠦᠯᠦᠭ') }}\r\n\r\n                <div class=\"nav-item-child\">\r\n\r\n                    <img class=\"erweima\" src=\"../../../assets/image/qun.jpg\">\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"nav-item\">\r\n\r\n                {{ handleLabel('ᠰᠣᠶᠣᠯ ᠤᠨ ᠡᠭᠦᠳᠦᠯᠲᠡ ᠶᠢᠨ ᠪᠢᠴᠢᠯ ᠳᠡᠯᠭᠡᠭᠦᠷ') }}\r\n\r\n                <div class=\"nav-item-child\">\r\n\r\n                    <img class=\"erweima\" src=\"../../../assets/image/weidian.png\">\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\r\n\r\n<div class=\"bee-detail\">\r\n<!--    <div class=\"bee-detail-logo\" *ngIf=\"parentLoading && parentData.pic\">-->\r\n<!--        <img [src]=\"host + parentData.pic\">-->\r\n<!--    </div>-->\r\n\r\n    <div class=\"bee-detail-body\" *ngIf=\"loading\">\r\n        <div class=\"bee-detail-title\">\r\n            <div class=\"title\">{{data.title}}</div>\r\n            <div class=\"autho\">{{data.author}} - {{data.update_time}}</div>\r\n        </div>\r\n        <div class=\"bee-detail-content\" [innerHTML]=\"data.content\"></div>\r\n    </div>\r\n</div>\r\n\r\n<bee-footer></bee-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\r\n\r\n<div id=\"fullpage\">\r\n\r\n    <div class=\"section\" id=\"section0\">\r\n        <div class=\"bee-banner\">\r\n            <nz-carousel nzAutoPlay>\r\n                <div nz-carousel-content *ngFor=\"let item of data\">\r\n                    <img [src]=\"host + item.pic\">\r\n                </div>\r\n            </nz-carousel>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"section\" id=\"section1\">\r\n        <div class=\"company-logo\">\r\n            <img src=\"../../assets/image/compoy.png\">\r\n        </div>\r\n        <div class=\"company-about\" *ngIf=\"loading\" [innerHTML]=\"about.content\" [ngStyle]=\"{transform: aboutScale}\">\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"section\" id=\"section2\">\r\n        <div class=\"news\">\r\n            <div class=\"news-header\">\r\n                <span> <img src=\"../../assets/image/jingpin.png\"> </span>\r\n            </div>\r\n            <div class=\"news-content\" [ngStyle]=\"{left: newLeft}\">\r\n\r\n                <div class=\"new-item\" *ngFor=\"let item of list; let i = index;\" [hidden]=\"i > 2\" (click)=\"itemClikc(item)\">\r\n                    <div class=\"title\"> {{ item.title }} </div>\r\n                    <img [src]=\"host + item.ico\">\r\n                </div>\r\n                <div class=\"new-more\" (click)=\"newsClikc()\">\r\n                    <span> ᠨᠡᠩ ᠤᠯᠠᠨ </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\" id=\"section3\" [ngStyle]=\"{backgroundImage:'url('+host + collection[collectionIndex]+')'}\">\r\n        <div class=\"collection\" [ngStyle]=\"{transform: collectionTransform}\" >\r\n            <img [src]=\"host + collection[collectionIndex]\">\r\n\r\n            <div class=\"prev\" *ngIf=\"collectionIndex !== 0\" (click)=\"collectionIndex = collectionIndex - 1\"></div>\r\n            <div class=\"next\" *ngIf=\"collectionIndex !== collection.length - 1\" (click)=\"collectionIndex = collectionIndex + 1\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\" id=\"section4\">\r\n        <div class=\"exhibition\" [ngStyle]=\"{transform: exhibitionTransform}\">\r\n            <div class=\"exhibition-header\">\r\n                <span> <img src=\"../../assets/image/zuixinzhanlan.png\"> </span>\r\n            </div>\r\n\r\n            <div class=\"exhibition-content\">\r\n                <div class=\"new-item\" *ngFor=\"let item of exhibition; let i = index;\" [hidden]=\"i > 4\" (click)=\"itemClikc(item)\">\r\n                    <div class=\"title\"> {{ item.description }} </div>\r\n                    <img [src]=\"host + item.ico\">\r\n                </div>\r\n\r\n                <div class=\"new-more\" (click)=\"exhibitionClikc()\">\r\n                    <span> ᠨᠡᠩ ᠤᠯᠠᠨ </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section\" id=\"section5\">\r\n        <div class=\"notice\" [ngStyle]=\"{right: noticeRight}\">\r\n            <div class=\"notice-item\">\r\n                <div class=\"title\">\r\n                    <span> ᠳᠡᠯᠭᠡᠭᠦᠷ ᠨᠡᠭᠡᠭᠡᠬᠦ ᠴᠠᠭ </span>\r\n                </div>\r\n                <div class=\"content\" *ngIf=\"timeLoading\" [innerHTML]=\"timeData.content\"></div>\r\n            </div>\r\n            <div class=\"notice-item\">\r\n                <div class=\"title\">\r\n                    <span> ᠵᠠᠮ ᠬᠠᠷᠢᠯᠴᠠᠭᠠᠨ ᠤ ᠱᠤᠭᠤᠮ</span>\r\n                </div>\r\n                <div class=\"content\" *ngIf=\"trafficLoading\" [innerHTML]=\"trafficData.content\"></div>\r\n            </div>\r\n            <div class=\"notice-item\">\r\n                <div class=\"title\">\r\n                    <span> ᠵᠤᠭᠠᠴᠠᠭᠰᠠᠳ ᠤᠨ ᠮᠡᠳᠡᠬᠦ ᠶᠣᠰᠣᠲᠠᠶ ᠵᠦᠶᠯ </span>\r\n                </div>\r\n                <div class=\"content\" *ngIf=\"noticeLoading\" [innerHTML]=\"noticeData.content\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <bee-footer></bee-footer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\r\n\r\n<div class=\"bee-list\">\r\n\r\n    <div class=\"bee-list-logo\" *ngIf=\"parentLoading\">\r\n        <img [src]=\"host + parentData.pic\">\r\n    </div>\r\n\r\n    <div class=\"bee-list-content\">\r\n        <div class=\"content2\" *ngIf=\"type === 'exhibition'\">\r\n            <bee-card *ngFor=\"let item of data; let i = index;\" (click)=\"itemClikc(item)\" [cover]=\"item.ico\" [title]=\"item.title\" [description]=\"item.description\"\r\n                      [position]=\"i % 2 === 0 ? 'left' : 'right'\" height=\"240px\"></bee-card>\r\n        </div>\r\n\r\n        <div class=\"content\" *ngIf=\"!type\">\r\n            <div class=\"list-item\" *ngFor=\"let item of data;\" (click)=\"itemClikc(item)\">\r\n                <bee-card [full]=\"true\" [cover]=\"item.ico\" [title]=\"item.title\"></bee-card>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"\" *ngIf=\"loading\">\r\n            <nz-skeleton [nzActive]=\"true\"></nz-skeleton>\r\n        </div>\r\n\r\n        <div class=\"list-page\" *ngIf=\"total !== 0\">\r\n            <nz-pagination [nzPageIndex]=\"page\" [nzTotal]=\"total\" (nzPageIndexChange)=\"pageChange($event)\"\r\n                           (nzPageSizeChange)=\"limitChange($event)\" nzShowSizeChanger\r\n                           [nzPageSize]=\"limit\"></nz-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\r\n\r\n<div class=\"bee-list\">\r\n\r\n    <div class=\"bee-list-logo\" *ngIf=\"parentLoading\">\r\n        <img [src]=\"host + parentData.pic\">\r\n    </div>\r\n\r\n    <div class=\"bee-list-content\">\r\n\r\n        <div class=\"content\">\r\n            <div class=\"list-item\" *ngFor=\"let item of data;\" (click)=\"itemClikc(item)\">\r\n                <bee-media [autoplay]=\"playSelect === item.id\" [cover]=\"host + item.ico\" [url]=\"item.enclosure\"></bee-media>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"\" *ngIf=\"loading\">\r\n            <nz-skeleton [nzActive]=\"true\"></nz-skeleton>\r\n        </div>\r\n\r\n\r\n        <div class=\"list-page\" *ngIf=\"total !== 0\">\r\n            <nz-pagination [nzPageIndex]=\"page\" [nzTotal]=\"total\" (nzPageIndexChange)=\"pageChange($event)\"\r\n                           (nzPageSizeChange)=\"limitChange($event)\" nzShowSizeChanger\r\n                           [nzPageSize]=\"limit\"></nz-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");







var routes = [
    // {
    //     path: 'home',
    //     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    // },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'video',
        component: _video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"]
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-banner {\n  height: 100%;\n}\n\n:host ::ng-deep .slick-initialized {\n  height: 100% !important;\n}\n\n:host ::ng-deep .ant-carousel .slick-slide img {\n  width: 100% !important;\n}\n\n:host ::ng-deep .slick-slide {\n  height: 100% !important;\n}\n\n:host ::ng-deep .slick-list {\n  height: 100% !important;\n}\n\n:host ::ng-deep .slick-track {\n  height: 100% !important;\n}\n\n:host ::ng-deep .ant-carousel .slick-initialized .slick-slide {\n  height: 100% !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n:host ::ng-deep .ant-carousel .slick-initialized .slick-slide img {\n  height: 100% !important;\n  display: flex;\n}\n\n:host ::ng-deep .slick-dots li {\n  height: 34px;\n  width: 34px;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n  background-size: 34px 34px;\n  background-position: 50%;\n}\n\n:host ::ng-deep .slick-dots li button {\n  display: none;\n}\n\n:host ::ng-deep .slick-dots .slick-active {\n  background-image: url('banner-active.png');\n}\n\n:host ::ng-deep .ant-carousel .slick-dots {\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGxvY2FsaG9zdFxccGMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksMENBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWUtYmFubmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1pbml0aWFsaXplZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLXNsaWRlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLXNsaWRlIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLWxpc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc2xpY2stdHJhY2sge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYW50LWNhcm91c2VsIC5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgbGkge1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2UvYmFubmVyLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM0cHggMzRweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1kb3RzIGxpIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2UvYmFubmVyLWFjdGl2ZS5wbmdcIik7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYW50LWNhcm91c2VsIC5zbGljay1kb3RzIHtcclxuICAgIGhlaWdodDogMzRweDtcclxufVxyXG4iLCIuYmVlLWJhbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1pbml0aWFsaXplZCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJvdXNlbCAuc2xpY2stc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1zbGlkZSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay10cmFjayB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJvdXNlbCAuc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJvdXNlbCAuc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIGltZyB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgbGkge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2UvYmFubmVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAzNHB4IDM0cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1kb3RzIGxpIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2xpY2stZG90cyAuc2xpY2stYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlL2Jhbm5lci1hY3RpdmUucG5nXCIpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyB7XG4gIGhlaWdodDogMzRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http-interceptors */ "./src/app/http-interceptors/index.ts");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/component.module */ "./src/app/component/component.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _directive_image_url_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directive/image-url.directive */ "./src/app/directive/image-url.directive.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_15__["DetailComponent"],
                _directive_image_url_directive__WEBPACK_IMPORTED_MODULE_16__["ImageUrlDirective"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_17__["VideoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _component_component_module__WEBPACK_IMPORTED_MODULE_12__["ComponentModule"]
            ],
            providers: [
                _http_interceptors__WEBPACK_IMPORTED_MODULE_11__["httpInterceptorProviders"],
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/bee-card/bee-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/bee-card/bee-card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-card {\n  width: 100%;\n  padding-top: calc(100% * 0.618);\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.bee-card-body {\n  position: absolute;\n  left: calc(var(--bee-padding, 16px) / 2);\n  right: calc(var(--bee-padding, 16px) / 2);\n  top: calc(var(--bee-padding, 16px) / 2);\n  bottom: calc(var(--bee-padding, 16px) / 2);\n  border-radius: var(--bee-border-radius);\n  border: 1px solid var(--bee-border-color);\n  overflow: hidden;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.bee-card-body:hover {\n  transition: all 0.5s;\n  box-shadow: var(--bee-border-color) 0px 0px 8px;\n}\n.bee-card-content {\n  width: 60%;\n  height: 100%;\n  padding: var(--bee-padding, 16px);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 16px;\n  overflow: hidden;\n  display: flex;\n}\n.bee-card-content .content {\n  max-width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.bee-card-content .content .title {\n  font-weight: bold;\n  font-size: 20px;\n}\n.bee-card-cover {\n  width: 40%;\n  height: 100%;\n  padding: var(--bee-padding, 16px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bee-card-cover img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.bee-card-body2 {\n  position: absolute;\n  left: calc(var(--bee-padding, 16px) / 2);\n  right: calc(var(--bee-padding, 16px) / 2);\n  top: calc(var(--bee-padding, 16px) / 2);\n  bottom: calc(var(--bee-padding, 16px) / 2);\n  border-radius: var(--bee-border-radius);\n  border: 1px solid var(--bee-border-color);\n  overflow: hidden;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.bee-card-body2:hover {\n  transition: all 0.5s;\n  box-shadow: var(--bee-border-color) 0px 0px 8px;\n}\n.bee-card-body2:hover .bee-card-content2 {\n  left: 0;\n  transition: all 0.5s;\n}\n.bee-card-content2 {\n  max-width: 100%;\n  height: 100%;\n  padding: calc(var(--bee-padding, 16px) / 2);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 16px;\n  overflow: hidden;\n  display: flex;\n  position: absolute;\n  left: -100%;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: all 0.5s;\n}\n.bee-card-content2 .content2 {\n  max-width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  color: #fff;\n}\n.bee-card-content2 .content2 .title {\n  font-weight: bold;\n  font-size: 20px;\n}\n.bee-card-cover2 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bee-card-cover2 img {\n  display: flex;\n  min-width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1jYXJkL0Q6XFxsb2NhbGhvc3RcXHBjL3NyY1xcYXBwXFxjb21wb25lbnRcXGJlZS1jYXJkXFxiZWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2JlZS1jYXJkL2JlZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDUjtBRENRO0VBQ0ksb0JBQUE7RUFDQSwrQ0FBQTtBQ0NaO0FER0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDRFI7QURHUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RaO0FER1k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNEaEI7QURNSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0pSO0FETVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNKWjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEU1E7RUFDSSxvQkFBQTtFQUNBLCtDQUFBO0FDUFo7QURVUTtFQUNJLE9BQUE7RUFDQSxvQkFBQTtBQ1JaO0FEYUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQWEsTUFBQTtFQUNiLG9DQUFBO0VBQ0Esb0JBQUE7QUNWUjtBRFlRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEWVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNWaEI7QURlSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNiUjtBRGVRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDYloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYmVlLWNhcmQvYmVlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVlLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogMC42MTgpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJi1ib2R5IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICByaWdodDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICB0b3A6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XHJcbiAgICAgICAgYm90dG9tOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJlZS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZWUtYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYmVlLWJvcmRlci1jb2xvcikgMHB4IDBweCA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY292ZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtYm9keTIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xyXG4gICAgICAgIHJpZ2h0OiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xyXG4gICAgICAgIHRvcDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICBib3R0b206IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmVlLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJlZS1ib3JkZXItY29sb3IpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1iZWUtYm9yZGVyLWNvbG9yKSAwcHggMHB4IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIgLmJlZS1jYXJkLWNvbnRlbnQyIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYtY29udGVudDIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlOyB0b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG4gICAgICAgIC5jb250ZW50MiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY292ZXIyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmJlZS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiAwLjYxOCk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xuICByaWdodDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcbiAgdG9wOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xuICBib3R0b206IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJlZS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmVlLWJvcmRlci1jb2xvcik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmVlLWNhcmQtYm9keTpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3gtc2hhZG93OiB2YXIoLS1iZWUtYm9yZGVyLWNvbG9yKSAwcHggMHB4IDhweDtcbn1cbi5iZWUtY2FyZC1jb250ZW50IHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZywgMTZweCk7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYmVlLWNhcmQtY29udGVudCAuY29udGVudCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uYmVlLWNhcmQtY29udGVudCAuY29udGVudCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmJlZS1jYXJkLWNvdmVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZywgMTZweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJlZS1jYXJkLWNvdmVyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5iZWUtY2FyZC1ib2R5MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcbiAgcmlnaHQ6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XG4gIHRvcDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcbiAgYm90dG9tOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1iZWUtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJlZS1ib3JkZXItY29sb3IpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJlZS1jYXJkLWJvZHkyOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJlZS1ib3JkZXItY29sb3IpIDBweCAwcHggOHB4O1xufVxuLmJlZS1jYXJkLWJvZHkyOmhvdmVyIC5iZWUtY2FyZC1jb250ZW50MiB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmJlZS1jYXJkLWNvbnRlbnQyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5iZWUtY2FyZC1jb250ZW50MiAuY29udGVudDIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZWUtY2FyZC1jb250ZW50MiAuY29udGVudDIgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5iZWUtY2FyZC1jb3ZlcjIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iZWUtY2FyZC1jb3ZlcjIgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/bee-card/bee-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/bee-card/bee-card.component.ts ***!
  \**********************************************************/
/*! exports provided: BeeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeeCardComponent", function() { return BeeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");



var BeeCardComponent = /** @class */ (function () {
    function BeeCardComponent() {
        this.height = '';
        this.title = '';
        this.description = '';
        this.full = false;
        this.position = 'left';
        this.cover = '';
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
    }
    BeeCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeCardComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeCardComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeCardComponent.prototype, "full", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeCardComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeCardComponent.prototype, "cover", void 0);
    BeeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bee-card',
            template: __webpack_require__(/*! raw-loader!./bee-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/bee-card/bee-card.component.html"),
            styles: [__webpack_require__(/*! ./bee-card.component.scss */ "./src/app/component/bee-card/bee-card.component.scss")]
        })
    ], BeeCardComponent);
    return BeeCardComponent;
}());



/***/ }),

/***/ "./src/app/component/bee-footer/bee-footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/bee-footer/bee-footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-footer {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #c28d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1mb290ZXIvRDpcXGxvY2FsaG9zdFxccGMvc3JjXFxhcHBcXGNvbXBvbmVudFxcYmVlLWZvb3RlclxcYmVlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2JlZS1mb290ZXIvYmVlLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYmVlLWZvb3Rlci9iZWUtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlZS1mb290ZXIge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhkM2Q7XHJcbn1cclxuIiwiLmJlZS1mb290ZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4ZDNkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/bee-footer/bee-footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/bee-footer/bee-footer.component.ts ***!
  \**************************************************************/
/*! exports provided: BeeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeeFooterComponent", function() { return BeeFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");



var BeeFooterComponent = /** @class */ (function () {
    function BeeFooterComponent(http) {
        this.http = http;
        this.loading = false;
    }
    BeeFooterComponent.prototype.ngOnInit = function () {
        this.getSite();
    };
    BeeFooterComponent.prototype.getSite = function () {
        var _this = this;
        var params = {
            url: 'api.php/cms/site',
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.site = res.data;
                _this.loading = true;
            }
        });
    };
    BeeFooterComponent.ctorParameters = function () { return [
        { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    BeeFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bee-footer',
            template: __webpack_require__(/*! raw-loader!./bee-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/bee-footer/bee-footer.component.html"),
            styles: [__webpack_require__(/*! ./bee-footer.component.scss */ "./src/app/component/bee-footer/bee-footer.component.scss")]
        })
    ], BeeFooterComponent);
    return BeeFooterComponent;
}());



/***/ }),

/***/ "./src/app/component/bee-media/bee-media.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/bee-media/bee-media.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.orh-media {\n  width: 100%;\n  padding-top: calc(100% * 0.5625);\n  position: relative;\n}\n\n.orh-media-content {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.orh-media-content1 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.orh-media-cover {\n  display: flex;\n  min-width: 100%;\n  height: 100%;\n}\n\n.orh-media-speed {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  bottom: -50px;\n  display: flex;\n  transition: bottom 0.8s;\n}\n\n.orh-media-speed-progress {\n  height: 4px !important;\n  margin: 0 !important;\n}\n\n.orh-media-speed-current {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  border-radius: 0 !important;\n  background-color: rgba(255, 255, 255, 0.35) !important;\n}\n\n.orh-media-speed-buffering {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n}\n\n.orh-media-controls {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%) !important;\n}\n\n.orh-media-time {\n  color: #c28d3d !important;\n}\n\n.orh-media-current {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  background-color: rgba(255, 255, 255, 0.35) !important;\n}\n\n.orh-media-buffering {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n}\n\n.orh-media-fullscreen {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 20px 20px;\n}\n\n:host ::ng-deep .orh-media-progress .slider {\n  z-index: 2;\n  width: 10px !important;\n  height: 10px !important;\n  margin-top: -3px !important;\n  margin-left: -5px !important;\n  background-color: #c28d3d !important;\n}\n\n:host ::ng-deep .orh-media-buffering .background {\n  background-color: #DBDBDB !important;\n}\n\n:host ::ng-deep .orh-media-current .background {\n  z-index: 2;\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  border: none !important;\n  background-color: #c28d3d !important;\n}\n\n:host ::ng-deep .orh-media-speed-progress .slider {\n  z-index: 2;\n  display: none !important;\n}\n\n:host ::ng-deep .orh-media-speed-buffering .background {\n  background-color: #DBDBDB !important;\n  border-radius: 0 !important;\n}\n\n:host ::ng-deep .orh-media-speed-current .background {\n  z-index: 2;\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  border: none !important;\n  border-radius: 0 !important;\n  background-color: #c28d3d !important;\n}\n\n:host ::ng-deep .vg-icon-play_arrow {\n  background-image: url('icon-play.svg');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 40px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1tZWRpYS9EOlxcbG9jYWxob3N0XFxwYy9zcmNcXGFwcFxcY29tcG9uZW50XFxiZWUtbWVkaWFcXGJlZS1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2JlZS1tZWRpYS9iZWUtbWVkaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFBUyxRQUFBO0VBQVUsTUFBQTtFQUFRLFNBQUE7QUNJbkM7O0FEREk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFBUyxRQUFBO0VBQVUsTUFBQTtFQUFRLFNBQUE7RUFDM0IsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNNUjs7QURISTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0tSOztBREZJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNJUjs7QURGUTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUNJWjs7QUREUTtFQUNJLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNEQUFBO0FDR1o7O0FEQVE7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0FDRVo7O0FERUk7RUFDSSwrRUFBQTtBQ0FSOztBREdJO0VBQ0kseUJBQUE7QUNEUjs7QURJSTtFQUNJLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtBQ0ZSOztBREtJO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtBQ0hSOztBRE1JO0VBRUksNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FDTFI7O0FEU0E7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtBQ05KOztBRFNBO0VBQ0ksb0NBQUE7QUNOSjs7QURTQTtFQUNJLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQ05KOztBRFNBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0FDTko7O0FEU0E7RUFDSSxvQ0FBQTtFQUNBLDJCQUFBO0FDTko7O0FEU0E7RUFDSSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQ05KOztBRFNBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9iZWUtbWVkaWEvYmVlLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ub3JoLW1lZGlhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDAuNTYyNSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDsgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudDEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAwOyBib3R0b206IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYtY292ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLXNwZWVkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAtNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAuOHM7XHJcblxyXG4gICAgICAgICYtcHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtY3VycmVudCB7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi1idWZmZXJpbmcge1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRyb2xzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aW1lIHtcclxuICAgICAgICBjb2xvcjogI2MyOGQzZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtY3VycmVudCB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLWJ1ZmZlcmluZyB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtZnVsbHNjcmVlbiB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWVkaWEvaWNvbi1mdWxsLnN2Z1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtcHJvZ3Jlc3MgLnNsaWRlciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhkM2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtYnVmZmVyaW5nIC5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQkRCREIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtY3VycmVudCAuYmFja2dyb3VuZCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhkM2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtc3BlZWQtcHJvZ3Jlc3MgLnNsaWRlciB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1zcGVlZC1idWZmZXJpbmcgLmJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RCREJEQiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1zcGVlZC1jdXJyZW50IC5iYWNrZ3JvdW5kIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGQzZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnZnLWljb24tcGxheV9hcnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWVkaWEvaWNvbi1wbGF5LnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcclxufVxyXG4iLCJ2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5vcmgtbWVkaWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDAuNTYyNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vcmgtbWVkaWEtY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLm9yaC1tZWRpYS1jb250ZW50MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5vcmgtbWVkaWEtY292ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vcmgtbWVkaWEtc3BlZWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogYm90dG9tIDAuOHM7XG59XG4ub3JoLW1lZGlhLXNwZWVkLXByb2dyZXNzIHtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4ub3JoLW1lZGlhLXNwZWVkLWN1cnJlbnQge1xuICB0b3A6IGNhbGMoNTAlIC0gMnB4KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSkgIWltcG9ydGFudDtcbn1cbi5vcmgtbWVkaWEtc3BlZWQtYnVmZmVyaW5nIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cbi5vcmgtbWVkaWEtY29udHJvbHMge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCBibGFjayAxMDAlKSAhaW1wb3J0YW50O1xufVxuLm9yaC1tZWRpYS10aW1lIHtcbiAgY29sb3I6ICNjMjhkM2QgIWltcG9ydGFudDtcbn1cbi5vcmgtbWVkaWEtY3VycmVudCB7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSkgIWltcG9ydGFudDtcbn1cbi5vcmgtbWVkaWEtYnVmZmVyaW5nIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbn1cbi5vcmgtbWVkaWEtZnVsbHNjcmVlbiB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLXByb2dyZXNzIC5zbGlkZXIge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4ZDNkICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLWJ1ZmZlcmluZyAuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQkRCREIgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtY3VycmVudCAuYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4ZDNkICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLXNwZWVkLXByb2dyZXNzIC5zbGlkZXIge1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLXNwZWVkLWJ1ZmZlcmluZyAuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQkRCREIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1zcGVlZC1jdXJyZW50IC5iYWNrZ3JvdW5kIHtcbiAgei1pbmRleDogMjtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGQzZCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnZnLWljb24tcGxheV9hcnJvdyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tZWRpYS9pY29uLXBsYXkuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/bee-media/bee-media.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/bee-media/bee-media.component.ts ***!
  \************************************************************/
/*! exports provided: BeeMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeeMediaComponent", function() { return BeeMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BeeMediaComponent = /** @class */ (function () {
    function BeeMediaComponent() {
        this.autoplay = false;
        this.onPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.play = false;
        this.fullStatus = false;
        this.speedBottom = '-50px';
        this.backgroundImage = "url(\"../../../assets/media/icon-full.svg\")";
        this.poster = '../../../assets/icon/logo.svg';
    }
    BeeMediaComponent.prototype.ngOnInit = function () {
    };
    BeeMediaComponent.prototype.onPlayerReady = function (api) {
        var _this = this;
        this.onPlayer.emit(api);
        api.fsAPI.onChangeFullscreen.subscribe(function (res) {
            if (res) {
                if (res !== _this.fullStatus) {
                    _this.fullStatus = res;
                }
            }
            else {
                if (res !== _this.fullStatus) {
                    _this.fullStatus = res;
                }
            }
        });
        api.subscriptions.ended.subscribe(function (res) {
            _this.speedBottom = '-50px';
        });
        api.subscriptions.timeUpdate.subscribe(function (res) {
            if (_this.controls.hideControls) {
                _this.speedBottom = '50px';
            }
            else {
                _this.speedBottom = '-50px';
            }
        });
    };
    BeeMediaComponent.prototype.ngOnChanges = function (changes) {
        if (changes.autoplay) {
            this.play = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('controls', { static: false })
    ], BeeMediaComponent.prototype, "controls", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeMediaComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeMediaComponent.prototype, "cover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BeeMediaComponent.prototype, "autoplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BeeMediaComponent.prototype, "onPlayer", void 0);
    BeeMediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bee-media',
            template: __webpack_require__(/*! raw-loader!./bee-media.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/bee-media/bee-media.component.html"),
            styles: [__webpack_require__(/*! ./bee-media.component.scss */ "./src/app/component/bee-media/bee-media.component.scss")]
        })
    ], BeeMediaComponent);
    return BeeMediaComponent;
}());



/***/ }),

/***/ "./src/app/component/bee-nav/bee-nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/bee-nav/bee-nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: var(--bee-header-height);\n  background-image: url('header-bg.jpg');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 160px;\n  z-index: 99;\n}\n.bee-nav-content {\n  display: flex;\n  justify-content: space-between;\n  width: var(--bee-body-width);\n  height: 100%;\n  margin: 0 auto;\n}\n.bee-nav-content .logo {\n  height: 100%;\n  padding: var(--bee-padding) 0;\n  overflow: hidden;\n}\n.bee-nav-content .logo img {\n  display: flex;\n}\n.bee-nav-content .nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  margin-left: var(--bee-margin);\n}\n.bee-nav-content .nav-item {\n  height: 100%;\n  padding: var(--bee-padding) calc(var(--bee-padding) / 2);\n  font-family: var(--bee-font-family);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-size: 25px;\n  position: relative;\n  cursor: pointer;\n  color: #17233d;\n  font-weight: bold;\n}\n.bee-nav-content .nav-item:hover {\n  color: #C28D3D;\n}\n.bee-nav-content .nav-item:hover .nav-item-child {\n  height: var(--bee-header-height);\n  transition: height 0.3s;\n}\n.bee-nav-content .nav-item-child {\n  display: flex;\n  flex-direction: column;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: 0;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  transition: height 0.3s;\n  padding: 0 calc(var(--bee-padding) / 2);\n  border-radius: 0 0 var(--bee-border-radius) var(--bee-border-radius);\n}\n.bee-nav-content .nav-item-child-item {\n  height: var(--bee-header-height);\n  padding: var(--bee-padding) calc(var(--bee-padding) / 2);\n  font-family: var(--bee-font-family);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-size: 20px;\n  position: relative;\n  cursor: pointer;\n  color: #fff;\n}\n.bee-nav-content .nav-item-child-item:hover {\n  color: #C28D3D;\n}\n.bee-nav-content .nav-item-child .erweima {\n  display: flex;\n  height: 118px;\n  margin: var(--bee-padding) calc(var(--bee-padding) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1uYXYvRDpcXGxvY2FsaG9zdFxccGMvc3JjXFxhcHBcXGNvbXBvbmVudFxcYmVlLW5hdlxcYmVlLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2JlZS1uYXYvYmVlLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQVMsTUFBQTtFQUNULFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FERUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQVI7QURFUTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQVo7QURFWTtFQUNJLGFBQUE7QUNBaEI7QURJUTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNGWjtBRElZO0VBQ0ksWUFBQTtFQUNBLHdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRmhCO0FESWdCO0VBQ0ksY0FqREo7QUMrQ2hCO0FER29CO0VBQ0ksZ0NBQUE7RUFDQSx1QkFBQTtBQ0R4QjtBREtnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFBVyxRQUFBO0VBQ1gsb0NBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxvRUFBQTtBQ0ZwQjtBRElvQjtFQUNJLGdDQUFBO0VBQ0Esd0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRnhCO0FESXdCO0VBQ0ksY0FoRlo7QUM4RWhCO0FETW9CO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1REFBQTtBQ0p4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9iZWUtbmF2L2JlZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1jb2xvcjogI0MyOEQzRDtcclxuXHJcbi5iZWUtbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7IHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9oZWFkZXItYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE2MHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1iZWUtbWFyZ2luKTtcclxuXHJcbiAgICAgICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTcyMzNkO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIC5uYXYtaXRlbS1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDAlOyByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tYmVlLWJvcmRlci1yYWRpdXMpIHZhcigtLWJlZS1ib3JkZXItcmFkaXVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmVyd2VpbWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHZhcigtLWJlZS1wYWRkaW5nKSBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYmVlLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9oZWFkZXItYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNjBweDtcbiAgei1pbmRleDogOTk7XG59XG4uYmVlLW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJlZS1uYXYtY29udGVudCAubG9nbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLW5hdi1jb250ZW50IC5sb2dvIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1iZWUtbWFyZ2luKTtcbn1cbi5iZWUtbmF2LWNvbnRlbnQgLm5hdi1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMTcyMzNkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5iZWUtbmF2LWNvbnRlbnQgLm5hdi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNDMjhEM0Q7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbTpob3ZlciAubmF2LWl0ZW0tY2hpbGQge1xuICBoZWlnaHQ6IHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbS1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3M7XG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWJlZS1ib3JkZXItcmFkaXVzKSB2YXIoLS1iZWUtYm9yZGVyLXJhZGl1cyk7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbS1jaGlsZC1pdGVtIHtcbiAgaGVpZ2h0OiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbS1jaGlsZC1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNDMjhEM0Q7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbS1jaGlsZCAuZXJ3ZWltYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTE4cHg7XG4gIG1hcmdpbjogdmFyKC0tYmVlLXBhZGRpbmcpIGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/bee-nav/bee-nav.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/bee-nav/bee-nav.component.ts ***!
  \********************************************************/
/*! exports provided: BeeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeeNavComponent", function() { return BeeNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! orhon-mongol-lib */ "./node_modules/orhon-mongol-lib/index.js");
/* harmony import */ var orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_4__);





var BeeNavComponent = /** @class */ (function () {
    function BeeNavComponent(http, router, route) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.route = route;
        this.navid = null;
        this.data = [];
        this.route.queryParams.subscribe(function (res) {
            _this.navid = res.id;
        });
    }
    BeeNavComponent.prototype.ngOnInit = function () {
        this.getNav();
    };
    BeeNavComponent.prototype.getNav = function () {
        var _this = this;
        var params = {
            url: 'api.php/cms/nav',
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.data = res.data;
            }
        });
    };
    BeeNavComponent.prototype.navChange2 = function () {
        this.router.navigate(['/home']);
    };
    BeeNavComponent.prototype.navChange = function (parent, event) {
        switch (event.mcode) {
            case '1':
                break;
            case '2':
                this.handleNav2(parent, event);
                break;
            case '3':
                break;
            case '4':
                this.handleNav1(parent, event);
                break;
            case '5':
                break;
        }
    };
    BeeNavComponent.prototype.handleNav1 = function (parent, event) {
        if (event.outlink) {
            window.open(event.outlink);
        }
        else {
            this.router.navigate(['/video'], {
                queryParams: {
                    pid: parent.scode,
                    id: event.scode
                }
            });
        }
    };
    BeeNavComponent.prototype.handleNav2 = function (parent, event) {
        var bool = event.filename.includes('exhibition');
        var detail = event.filename.includes('nodetail');
        if (event.outlink) {
            window.open(event.outlink);
        }
        else {
            this.router.navigate(['/list'], {
                queryParams: {
                    pid: parent.scode,
                    id: event.scode,
                    type: bool ? 'exhibition' : '',
                    detail: detail ? 'nodetail' : ''
                }
            });
        }
    };
    BeeNavComponent.prototype.handleLabel = function (str) {
        return Object(orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_4__["M2Unicode"])(str);
    };
    BeeNavComponent.prototype.logoClikc = function () {
        this.router.navigate(['/home']);
    };
    BeeNavComponent.ctorParameters = function () { return [
        { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    BeeNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bee-nav',
            template: __webpack_require__(/*! raw-loader!./bee-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/bee-nav/bee-nav.component.html"),
            styles: [__webpack_require__(/*! ./bee-nav.component.scss */ "./src/app/component/bee-nav/bee-nav.component.scss")]
        })
    ], BeeNavComponent);
    return BeeNavComponent;
}());



/***/ }),

/***/ "./src/app/component/component.module.ts":
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var videogular2_compiled_src_overlay_play_overlay_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/compiled/src/overlay-play/overlay-play */ "./node_modules/videogular2/compiled/src/overlay-play/overlay-play.js");
/* harmony import */ var videogular2_compiled_src_overlay_play_overlay_play__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_src_overlay_play_overlay_play__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_compiled_src_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/compiled/src/core/core */ "./node_modules/videogular2/compiled/src/core/core.js");
/* harmony import */ var videogular2_compiled_src_core_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_src_core_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_compiled_src_controls_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/compiled/src/controls/controls */ "./node_modules/videogular2/compiled/src/controls/controls.js");
/* harmony import */ var videogular2_compiled_src_controls_controls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_src_controls_controls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_compiled_src_buffering_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/compiled/src/buffering/buffering */ "./node_modules/videogular2/compiled/src/buffering/buffering.js");
/* harmony import */ var videogular2_compiled_src_buffering_buffering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_src_buffering_buffering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var videogular2_compiled_src_streaming_streaming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/compiled/src/streaming/streaming */ "./node_modules/videogular2/compiled/src/streaming/streaming.js");
/* harmony import */ var videogular2_compiled_src_streaming_streaming__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_src_streaming_streaming__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bee_nav_bee_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bee-nav/bee-nav.component */ "./src/app/component/bee-nav/bee-nav.component.ts");
/* harmony import */ var _bee_footer_bee_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bee-footer/bee-footer.component */ "./src/app/component/bee-footer/bee-footer.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bee_card_bee_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bee-card/bee-card.component */ "./src/app/component/bee-card/bee-card.component.ts");
/* harmony import */ var _bee_media_bee_media_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bee-media/bee-media.component */ "./src/app/component/bee-media/bee-media.component.ts");














var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _bee_nav_bee_nav_component__WEBPACK_IMPORTED_MODULE_8__["BeeNavComponent"],
                _bee_footer_bee_footer_component__WEBPACK_IMPORTED_MODULE_9__["BeeFooterComponent"],
                _bee_card_bee_card_component__WEBPACK_IMPORTED_MODULE_12__["BeeCardComponent"],
                _bee_media_bee_media_component__WEBPACK_IMPORTED_MODULE_13__["BeeMediaComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                videogular2_compiled_src_overlay_play_overlay_play__WEBPACK_IMPORTED_MODULE_3__["VgOverlayPlayModule"],
                videogular2_compiled_src_core_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
                videogular2_compiled_src_controls_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
                videogular2_compiled_src_buffering_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"],
                videogular2_compiled_src_streaming_streaming__WEBPACK_IMPORTED_MODULE_7__["VgStreamingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]
            ],
            exports: [
                _bee_nav_bee_nav_component__WEBPACK_IMPORTED_MODULE_8__["BeeNavComponent"],
                _bee_footer_bee_footer_component__WEBPACK_IMPORTED_MODULE_9__["BeeFooterComponent"],
                _bee_card_bee_card_component__WEBPACK_IMPORTED_MODULE_12__["BeeCardComponent"],
                _bee_media_bee_media_component__WEBPACK_IMPORTED_MODULE_13__["BeeMediaComponent"]
            ]
        })
    ], ComponentModule);
    return ComponentModule;
}());



/***/ }),

/***/ "./src/app/config/index.ts":
/*!*********************************!*\
  !*** ./src/app/config/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    host: 'http://musem.juncs.cn/',
});


/***/ }),

/***/ "./src/app/detail/detail.component.scss":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-detail {\n  width: 100%;\n  height: calc(100vh - 45px - var(--bee-header-height));\n  margin-top: var(--bee-header-height);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-logo {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n}\n.bee-detail-logo img {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n}\n.bee-detail-body {\n  flex: 1;\n  display: flex;\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: var(--bee-padding);\n  background-color: #fff;\n  overflow: hidden;\n}\n.bee-detail-title {\n  display: flex;\n}\n.bee-detail-title .title {\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: var(--bee-font-family);\n  padding: 0 var(--bee-padding);\n  display: flex;\n  justify-content: center;\n}\n.bee-detail-title .autho {\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding);\n  background-color: rgba(194, 141, 61, 0.3);\n  border-right: 2px solid #C28D3D;\n  font-size: 18px;\n  font-family: var(--bee-font-family);\n}\n.bee-detail-content {\n  flex: 1;\n  height: 100%;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0Q6XFxsb2NhbGhvc3RcXHBjL3NyY1xcYXBwXFxkZXRhaWxcXGRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxxREFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBREdJO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7QUNGUjtBRElRO0VBQ0ksaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0ZaO0FESVE7RUFDSSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNGWjtBRE1JO0VBQ0ksT0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlZS1kZXRhaWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NXB4IC0gdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpKTtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAmLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtYm9keSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1iZWUtbWFyZ2luKSBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tYmVlLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmF1dGhvIHtcclxuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTQxLCA2MSwgMC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0MyOEQzRDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250ZW50IHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG4iLCIuYmVlLWRldGFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NXB4IC0gdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJlZS1kZXRhaWwtbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1kZXRhaWwtbG9nbyBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtZGV0YWlsLWJvZHkge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBtYXJnaW46IHZhcigtLWJlZS1tYXJnaW4pIGF1dG87XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtZGV0YWlsLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5iZWUtZGV0YWlsLXRpdGxlIC50aXRsZSB7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBwYWRkaW5nOiAwIHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmVlLWRldGFpbC10aXRsZSAuYXV0aG8ge1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk0LCAxNDEsIDYxLCAwLjMpO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjQzI4RDNEO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xufVxuLmJlZS1kZXRhaWwtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(http, route) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.host = _config__WEBPACK_IMPORTED_MODULE_4__["default"].host;
        this.loading = false;
        this.parentLoading = false;
        this.route.queryParams.subscribe(function (res) {
            _this.getParent(res.pid);
            _this.getDetail(res.id);
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.getParent = function (event) {
        var _this = this;
        var param = {
            url: "api.php/cms/sort/scode/" + event
        };
        this.http.get(param).subscribe(function (res) {
            if (res.code === 1) {
                _this.parentData = res.data;
                _this.parentLoading = true;
            }
        });
    };
    DetailComponent.prototype.getDetail = function (event) {
        var _this = this;
        var params = {
            url: "api.php/content/" + event,
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                var data = res.data;
                data.content = data.content.replace(/src=["]/g, "src=\"" + _this.host);
                _this.data = data;
                _this.loading = true;
            }
        });
    };
    DetailComponent.ctorParameters = function () { return [
        { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/detail/detail.component.scss")]
        })
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/directive/image-url.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directive/image-url.directive.ts ***!
  \**************************************************/
/*! exports provided: ImageUrlDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUrlDirective", function() { return ImageUrlDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");



var ImageUrlDirective = /** @class */ (function () {
    function ImageUrlDirective(el) {
        this.el = el;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
    }
    ImageUrlDirective.prototype.ngOnChanges = function (changes) {
        if (changes.appImageUrl && changes.appImageUrl.currentValue) {
            var data = changes.appImageUrl.currentValue;
            data = data.replace(/src=["]/g, "src=\"" + this.host);
        }
    };
    ImageUrlDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageUrlDirective.prototype, "appImageUrl", void 0);
    ImageUrlDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appImageUrl]'
        })
    ], ImageUrlDirective);
    return ImageUrlDirective;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-list {\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: calc(var(--bee-padding) / 2);\n  overflow: hidden;\n  background-color: white;\n}\n.home-list .content {\n  display: flex;\n  flex-wrap: wrap;\n}\n.home-list .content .list-item {\n  flex-basis: 25%;\n}\n.bee-banner {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.bee-banner nz-carousel {\n  height: 100%;\n}\n.section {\n  overflow: hidden;\n}\n.company-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.company-logo img {\n  height: 250px;\n  display: flex;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.company-about {\n  background-color: #eeeeee;\n  width: var(--bee-body-width);\n  height: calc(100% - 350px);\n  margin: 0 auto;\n  margin-bottom: 100px;\n  font-family: var(--bee-font-family);\n  font-size: 16px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.5s;\n}\n#section2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.news {\n  width: var(--bee-body-width);\n  background-color: #2d446e;\n  border-radius: 20px;\n}\n.news-header {\n  height: 100px;\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.news-header span {\n  color: white;\n  height: 100%;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 25px;\n  font-weight: bolder;\n  text-align: center;\n  position: relative;\n  /*&:before {\n      content: '';\n      background-image: url('../../assets/image/title-left.png');\n      background-repeat: no-repeat;\n      background-size: auto 100px;\n      position: absolute;\n      top: 0; bottom: 0;\n      left: -100px;\n      width: 100px;\n  }\n\n  &:after {\n      content: '';\n      background-image: url('../../assets/image/title-right.png');\n      background-repeat: no-repeat;\n      background-size: auto 100px;\n      position: absolute;\n      top: 0; bottom: 0;\n      right: -100px;\n      width: 145px;\n  }*/\n}\n.news-header img {\n  display: flex;\n  height: 100%;\n}\n.news-content {\n  width: 100%;\n  height: 250px;\n  max-height: 400px;\n  margin: 100px auto;\n  position: relative;\n  transition: all 0s;\n  padding: var(--bee-padding);\n  overflow: hidden;\n  display: flex;\n}\n.news-content .new-item {\n  flex: 1;\n  flex-basis: calc(33.33% - 112px);\n  height: 100%;\n  margin-left: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.news-content .new-item:first-child {\n  margin: 0;\n}\n.news-content .new-item:hover .title {\n  left: 0;\n  transition: all 0s;\n}\n.news-content .new-item .title {\n  height: 100%;\n  position: absolute;\n  left: -100%;\n  top: 0;\n  padding: var(--bee-padding);\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  color: #fff;\n  transition: all 0s;\n}\n.news-content .new-item img {\n  max-height: 100%;\n  max-width: 100%;\n  width: -webkit-fill-available;\n  height: -webkit-fill-available;\n}\n.news-content .new-more {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.news-content .new-more span {\n  text-align: right;\n  color: white;\n  font-size: 12px;\n  line-height: 48px;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n}\n.notice {\n  width: var(--bee-body-width);\n  height: calc(100% - 145px);\n  margin: 50px auto;\n  padding: var(--bee-padding);\n  position: relative;\n  transition: all 0.2s;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\n.notice-item {\n  height: 100%;\n  margin-left: var(--bee-margin);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.notice-item:first-child {\n  margin-left: 0;\n}\n.notice-item .title {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  background-color: #C28D3D;\n  overflow: hidden;\n  padding: var(--bee-padding) 0;\n}\n.notice-item .title span {\n  width: 100%;\n  line-height: 48px;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  color: #fff;\n}\n.notice-item .content {\n  height: 100%;\n  margin-left: var(--bee-margin);\n  padding: var(--bee-padding) 0;\n}\n.notice-item .content .tent {\n  overflow: hidden;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n}\n:host ::ng-deep .notice p {\n  font-size: 20px;\n  font-family: \"NotoSansNormal\";\n}\n#section3 {\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.collection {\n  width: var(--bee-body-width);\n  height: calc(100% - 100px);\n  margin: 50px auto;\n  transition: all 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--bee-padding);\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.collection img {\n  display: flex;\n  max-height: 100%;\n  max-width: 100%;\n}\n.collection .prev {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  width: 20px;\n  height: 36px;\n  border: none;\n  background-image: url('ban_prev_hover.png');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 20px 36px;\n  cursor: pointer;\n}\n.collection .next {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  width: 20px;\n  height: 36px;\n  border: none;\n  background-image: url('ban_next_hover.png');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 20px 36px;\n  cursor: pointer;\n}\n.exhibition {\n  width: var(--bee-body-width);\n  height: calc(100% - 100px);\n  margin: 50px auto;\n  transition: all 0.5s;\n}\n.exhibition-header {\n  height: 100px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.exhibition-header span {\n  height: 100%;\n  color: #2d446e;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 25px;\n  font-weight: bolder;\n  text-align: center;\n}\n.exhibition-header img {\n  display: flex;\n  height: 100%;\n}\n.exhibition-content {\n  width: 100%;\n  height: calc(100% - 150px);\n  margin: 0 auto;\n  position: relative;\n  transition: all 0s;\n  padding: var(--bee-padding);\n  overflow: hidden;\n  display: flex;\n  max-height: 400px;\n}\n.exhibition-content .new-item {\n  flex: 1;\n  flex-basis: calc(33.33% - 112px);\n  height: 100%;\n  margin-left: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.exhibition-content .new-item:first-child {\n  margin: 0;\n}\n.exhibition-content .new-item:hover .title {\n  left: 0;\n  transition: all 0.5s;\n}\n.exhibition-content .new-item .title {\n  height: 100%;\n  position: absolute;\n  left: -100%;\n  top: 0;\n  padding: var(--bee-padding);\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  color: #fff;\n  transition: all 0s;\n}\n.exhibition-content .new-item img {\n  display: flex;\n  min-height: 100%;\n  min-width: 100%;\n}\n.exhibition-content .new-more {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.exhibition-content .new-more span {\n  width: 100%;\n  text-align: right;\n  color: #2253a2;\n  line-height: 48px;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcbG9jYWxob3N0XFxwYy9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFHSSxhQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER1E7RUFDSSxlQUFBO0FDRFo7QURNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNISjtBREtJO0VBQ0ksWUFBQTtBQ0hSO0FET0E7RUFDSSxnQkFBQTtBQ0pKO0FEUUE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ05KO0FET0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRFNBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUdBLG9CQUFBO0FDUko7QURXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUko7QURXQTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEU0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1BSO0FEU1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0FDWVo7QURXUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDVFo7QURhSTtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1pSO0FEY1E7RUFDSSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDWlo7QURjWTtFQUNJLFNBQUE7QUNaaEI7QURlWTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ2JoQjtBRGdCWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSxNQUFBO0VBQ2IsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2JoQjtBRGdCWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNkaEI7QURrQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGVBQUE7QUNqQlo7QURtQlk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUNqQmhCO0FEdUJBO0VBQ0ksNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtBQ3BCSjtBRHNCSTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDcEJSO0FEc0JRO0VBQ0ksY0FBQTtBQ3BCWjtBRHVCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3JCWjtBRHVCWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNyQmhCO0FEeUJRO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUN2Qlo7QUR5Qlk7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ3ZCaEI7QUQ4QkE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUMzQko7QUQ4QkE7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUMzQko7QUQ4QkE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQzNCSjtBRDhCSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM1QlI7QUQrQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFBWSxRQUFBO0VBQ1osMkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDNUJSO0FEOEJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQWEsUUFBQTtFQUNiLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQzNCUjtBRCtCQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDNUJKO0FEOEJJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzVCUjtBRDhCUTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzVCWjtBRGlDUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDL0JaO0FEbUNJO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDakNSO0FEbUNRO0VBQ0ksT0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2pDWjtBRG1DWTtFQUNJLFNBQUE7QUNqQ2hCO0FEb0NZO0VBQ0ksT0FBQTtFQUNBLG9CQUFBO0FDbENoQjtBRHFDWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFBYSxNQUFBO0VBQ2IsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2xDaEI7QURxQ1k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDbkNoQjtBRHVDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0EsZUFBQTtBQ3RDWjtBRHdDWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ3RDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1saXN0IHtcclxuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XHJcbiAgICBtYXJnaW46IHZhcigtLWJlZS1tYXJnaW4pIGF1dG87XHJcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICAvL21hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLWJlZS1tYXJnaW4pIC8gLTIpO1xyXG4gICAgICAgIC8vbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLWJlZS1tYXJnaW4pIC8gLTIpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAubGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJlZS1iYW5uZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbnotY2Fyb3VzZWwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbi5jb21wYW55LWxvZ28ge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb21wYW55LWFib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1MHB4KTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbiNzZWN0aW9uMiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3cyB7XHJcbiAgICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA2OCwgMTEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAvKiY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2UvdGl0bGUtbGVmdC5wbmcnKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7IGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL3RpdGxlLXJpZ2h0LnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDsgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy9oZWlnaHQ6IGNhbGMoMTAwJSAtIDI1MHB4KTtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDBzO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5uZXctaXRlbSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMlIC0gMTEycHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwJTsgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5ldy1tb3JlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3RpY2Uge1xyXG4gICAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTQ1cHgpO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcblxyXG4gICAgJi1pdGVtIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLWJlZS1tYXJnaW4pO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzI4RDNEO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgMDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tYmVlLW1hcmdpbik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xyXG5cclxuICAgICAgICAgICAgLnRlbnQge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5ub3RpY2UgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ05vdG9TYW5zTm9ybWFsJztcclxufVxyXG5cclxuI3NlY3Rpb24zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5cclxuLmNvbGxlY3Rpb24ge1xyXG4gICAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmV2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTVweDsgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZS9iYW5fcHJldl9ob3Zlci5wbmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMzZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubmV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4OyB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL2Jhbl9uZXh0X2hvdmVyLnBuZycpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAzNnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmV4aGliaXRpb24ge1xyXG4gICAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoNDUsIDY4LCAxMTApO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwcztcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgICAgICAubmV3LWl0ZW0ge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDExMnB4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDAlOyB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmV3LW1vcmUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoMzQsIDgzLCAxNjIpO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmhvbWUtbGlzdCB7XG4gIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gIG1hcmdpbjogdmFyKC0tYmVlLW1hcmdpbikgYXV0bztcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uaG9tZS1saXN0IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmhvbWUtbGlzdCAuY29udGVudCAubGlzdC1pdGVtIHtcbiAgZmxleC1iYXNpczogMjUlO1xufVxuXG4uYmVlLWJhbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5iZWUtYmFubmVyIG56LWNhcm91c2VsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VjdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb21wYW55LWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb21wYW55LWxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbXBhbnktYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4jc2VjdGlvbjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3Mge1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ0NDZlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm5ld3MtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmV3cy1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyomOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL3RpdGxlLWxlZnQucG5nJyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyBib3R0b206IDA7XG4gICAgICBsZWZ0OiAtMTAwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2UvdGl0bGUtcmlnaHQucG5nJyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyBib3R0b206IDA7XG4gICAgICByaWdodDogLTEwMHB4O1xuICAgICAgd2lkdGg6IDE0NXB4O1xuICB9Ki9cbn1cbi5uZXdzLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmV3cy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDBzO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmV3cy1jb250ZW50IC5uZXctaXRlbSB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMlIC0gMTEycHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5ld3MtY29udGVudCAubmV3LWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4ubmV3cy1jb250ZW50IC5uZXctaXRlbTpob3ZlciAudGl0bGUge1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMHM7XG59XG4ubmV3cy1jb250ZW50IC5uZXctaXRlbSAudGl0bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMHM7XG59XG4ubmV3cy1jb250ZW50IC5uZXctaXRlbSBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG4ubmV3cy1jb250ZW50IC5uZXctbW9yZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmV3cy1jb250ZW50IC5uZXctbW9yZSBzcGFuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm5vdGljZSB7XG4gIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTQ1cHgpO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG59XG4ubm90aWNlLWl0ZW0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1iZWUtbWFyZ2luKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ub3RpY2UtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLm5vdGljZS1pdGVtIC50aXRsZSB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDMjhEM0Q7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xufVxuLm5vdGljZS1pdGVtIC50aXRsZSBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpY2UtaXRlbSAuY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWJlZS1tYXJnaW4pO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgMDtcbn1cbi5ub3RpY2UtaXRlbSAuY29udGVudCAudGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubm90aWNlIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zTm9ybWFsXCI7XG59XG5cbiNzZWN0aW9uMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5jb2xsZWN0aW9uIHtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLmNvbGxlY3Rpb24gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmNvbGxlY3Rpb24gLnByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2Jhbl9wcmV2X2hvdmVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbGxlY3Rpb24gLm5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iYW5fbmV4dF9ob3Zlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDM2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4aGliaXRpb24ge1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmV4aGliaXRpb24taGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZXhoaWJpdGlvbi1oZWFkZXIgc3BhbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICMyZDQ0NmU7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5leGhpYml0aW9uLWhlYWRlciBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZXhoaWJpdGlvbi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTUwcHgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4uZXhoaWJpdGlvbi1jb250ZW50IC5uZXctaXRlbSB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMlIC0gMTEycHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmV4aGliaXRpb24tY29udGVudCAubmV3LWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4uZXhoaWJpdGlvbi1jb250ZW50IC5uZXctaXRlbTpob3ZlciAudGl0bGUge1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5leGhpYml0aW9uLWNvbnRlbnQgLm5ldy1pdGVtIC50aXRsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAwJTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwcztcbn1cbi5leGhpYml0aW9uLWNvbnRlbnQgLm5ldy1pdGVtIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5leGhpYml0aW9uLWNvbnRlbnQgLm5ldy1tb3JlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leGhpYml0aW9uLWNvbnRlbnQgLm5ldy1tb3JlIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjI1M2EyO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! orhon-mongol-lib */ "./node_modules/orhon-mongol-lib/index.js");
/* harmony import */ var orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_5__);






var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, cdr, router) {
        this.http = http;
        this.cdr = cdr;
        this.router = router;
        this.host = _config__WEBPACK_IMPORTED_MODULE_3__["default"].host;
        this.data = [];
        this.list = [];
        this.loading = false;
        this.newLeft = '-120%';
        this.noticeRight = '120%';
        this.aboutScale = 'scale(0)';
        this.noticeLoading = false;
        this.trafficLoading = false;
        this.timeLoading = false;
        this.collection = [];
        this.collectionIndex = 0;
        this.exhibition = [];
        this.collectionTransform = 'rotate(0deg) scale(0)';
        this.exhibitionTransform = 'scale(0)';
        this.jqueryPage();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBanner();
        this.getAbout();
        this.getRecommend();
        this.getNotice();
        this.getTraffic();
        this.getTime();
        this.getCollection();
        this.getExhibition();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        $.fn.fullpage.destroy('all');
    };
    HomeComponent.prototype.jqueryPage = function () {
        var that = this;
        $(function () {
            $('#fullpage').fullpage({
                navigation: true,
                verticalCentered: false,
                navigationColor: '#c28d3d',
                loopBottom: true,
                paddingTop: 150,
                afterLoad: function (anchorLink, index) {
                    // if (index === 2) {
                    //     that.aboutScale = 'scale(1)';
                    // }
                    if (index === 2) {
                        that.newLeft = '0';
                    }
                    if (index === 3) {
                        that.collectionTransform = 'rotate(360deg) scale(1)';
                    }
                    if (index === 4) {
                        that.exhibitionTransform = 'scale(1)';
                    }
                    if (index === 5) {
                        that.noticeRight = '0';
                    }
                },
                onLeave: function (index, direction) {
                    // if (index === 2) {
                    //     that.aboutScale = 'scale(0)';
                    // }
                    if (index === 2) {
                        that.newLeft = '-120%';
                    }
                    if (index === 3) {
                        that.collectionTransform = 'rotate(0deg) scale(0)';
                    }
                    if (index === 4) {
                        that.exhibitionTransform = 'scale(0)';
                    }
                    if (index === 5) {
                        that.noticeRight = '-120%';
                    }
                }
            });
        });
    };
    HomeComponent.prototype.getBanner = function () {
        var _this = this;
        var params = {
            url: 'api.php/cms/slide/gid/1',
            data: {}
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.data = res.data;
            }
        });
    };
    HomeComponent.prototype.getAbout = function () {
        var _this = this;
        var params = {
            url: 'api.php/about/1',
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.about = res.data;
                _this.loading = true;
            }
        });
    };
    HomeComponent.prototype.getRecommend = function () {
        var _this = this;
        var params = {
            url: 'api.php/cms/search',
            data: 'isrecommend=1'
        };
        this.http.post(params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        }).subscribe(function (res) {
            if (res.code === 1) {
                _this.list = res.data;
            }
        });
    };
    HomeComponent.prototype.itemClikc = function (event) {
        this.router.navigate(['/detail'], { queryParams: { id: event.id } });
    };
    HomeComponent.prototype.getNotice = function () {
        var _this = this;
        var params = {
            url: "api.php/about/25",
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.noticeData = res.data;
                _this.noticeLoading = true;
            }
        });
    };
    HomeComponent.prototype.newsClikc = function () {
        this.router.navigate(['/list'], { queryParams: { pid: 12, id: 19 } });
    };
    HomeComponent.prototype.getCollection = function () {
        var _this = this;
        var params = {
            url: "api.php/cms/search",
            data: 'scode=28'
        };
        this.http.post(params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        }).subscribe(function (res) {
            if (res.code === 1 && res.data.length) {
                var arr = res.data[0].pics.split(',');
                _this.collection = arr;
                _this.cdr.detectChanges();
                _this.collectionAni = setInterval(function () {
                    if (_this.collectionIndex < _this.collection.length - 1) {
                        _this.collectionIndex += 1;
                    }
                    else {
                        _this.collectionIndex = 0;
                    }
                }, 3000);
            }
        });
    };
    HomeComponent.prototype.getExhibition = function () {
        var _this = this;
        var params = {
            url: "api.php/list/29/page/1/num/4"
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.exhibition = res.data;
            }
        });
    };
    HomeComponent.prototype.exhibitionClikc = function () {
        this.router.navigate(['/list'], { queryParams: { pid: 13, id: 29, type: 'exhibition' } });
    };
    HomeComponent.prototype.getTraffic = function () {
        var _this = this;
        var params = {
            url: "api.php/about/24",
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.trafficData = res.data;
                _this.trafficLoading = true;
            }
        });
    };
    HomeComponent.prototype.getTime = function () {
        var _this = this;
        var params = {
            url: "api.php/about/23",
        };
        this.http.get(params).subscribe(function (res) {
            if (res.code === 1) {
                _this.timeData = res.data;
                _this.timeLoading = true;
            }
        });
    };
    HomeComponent.prototype.handleLabel = function (str) {
        return Object(orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_5__["M2Unicode"])(str);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/http-interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/interceptor/interceptor.service */ "./src/app/service/interceptor/interceptor.service.ts");


var httpInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _service_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["InterceptorService"],
        multi: true
    },
];


/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-list {\n  width: 100%;\n  height: calc(100vh - var(--bee-header-height));\n  margin-top: var(--bee-header-height);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.bee-list-logo {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n}\n.bee-list-logo img {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n}\n.bee-list-content {\n  flex: 1;\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: calc(var(--bee-padding) / 2);\n  overflow: hidden;\n  background-color: white;\n}\n.bee-list-content .content {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.bee-list-content .content .list-item {\n  flex-basis: 25%;\n}\n.bee-list-content .list-page {\n  display: flex;\n  justify-content: center;\n  padding: calc(var(--bee-padding) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9EOlxcbG9jYWxob3N0XFxwYy9zcmNcXGFwcFxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLDhDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRFo7QURLSTtFQUNJLE9BQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBekJFO0VBMEJGLGdCQUFBO0VBQ0EsdUJBQUE7QUNIUjtBREtRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0haO0FES1k7RUFDSSxlQUFBO0FDSGhCO0FET1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XHJcblxyXG4uYmVlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCkpO1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgICAmLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tYmVlLW1hcmdpbikgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC1wYWdlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCkpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5iZWUtbGlzdC1sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWxpc3QtbG9nbyBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtbGlzdC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgbWFyZ2luOiB2YXIoLS1iZWUtbWFyZ2luKSBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5iZWUtbGlzdC1jb250ZW50IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1saXN0LWNvbnRlbnQgLmNvbnRlbnQgLmxpc3QtaXRlbSB7XG4gIGZsZXgtYmFzaXM6IDI1JTtcbn1cbi5iZWUtbGlzdC1jb250ZW50IC5saXN0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");





var ListComponent = /** @class */ (function () {
    function ListComponent(router, http, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.host = _config__WEBPACK_IMPORTED_MODULE_4__["default"].host;
        this.page = 1;
        this.limit = 10;
        this.total = 0;
        this.loading = true;
        this.data = [];
        this.parentLoading = false;
        this.type = '';
        this.detail = '';
        this.route.queryParams.subscribe(function (res) {
            _this.condition = res.id;
            _this.pid = res.pid;
            _this.type = res.type;
            _this.detail = res.detail;
            _this.parentLoading = false;
            _this.getParent(res.pid);
            _this.getData();
        });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.getParent = function (event) {
        var _this = this;
        var param = {
            url: "api.php/cms/sort/scode/" + event
        };
        this.http.get(param).subscribe(function (res) {
            if (res.code === 1) {
                _this.parentData = res.data;
                _this.parentLoading = true;
            }
        });
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        var param = {
            url: "api.php/list/" + this.condition + "/page/" + this.page + "/num/" + this.limit,
            data: {}
        };
        this.http.get(param).subscribe(function (res) {
            if (res.code === 1) {
                _this.data = res.data;
                _this.total = res.rowtotal;
            }
            _this.loading = false;
        });
    };
    ListComponent.prototype.pageChange = function (event) {
        this.page = event;
        this.loading = true;
        this.getData();
    };
    ListComponent.prototype.limitChange = function (event) {
        this.limit = event;
        this.loading = true;
        this.getData();
    };
    ListComponent.prototype.itemClikc = function (event) {
        if (this.detail !== 'nodetail') {
            this.router.navigate(['/detail'], { queryParams: { pid: this.pid, id: event.id } });
        }
    };
    ListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/service/http/http.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/http/http.service.ts ***!
  \**********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils.service */ "./src/app/service/utils/utils.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");
/* harmony import */ var orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! orhon-mongol-lib */ "./node_modules/orhon-mongol-lib/index.js");
/* harmony import */ var orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_7__);








var HttpService = /** @class */ (function () {
    function HttpService(http, utils) {
        this.http = http;
        this.utils = utils;
        this.host = _config__WEBPACK_IMPORTED_MODULE_6__["default"].host;
    }
    /**
     * get 请求
     * @param url 请求参数
     */
    HttpService.prototype.get = function (param, option) {
        var options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: param.data ? param.data : {} }) }, option);
        var url = "" + this.host + param.url;
        if (param.host) {
            url = "" + param.host + param.url;
        }
        return this.http
            .get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * post 请求
     * @param url 请求地址
     * @param data 参数
     */
    HttpService.prototype.post = function (param, option) {
        var url = "" + this.host + param.url;
        if (param.host) {
            url = "" + param.host + param.url;
        }
        return this.http
            .post(url, param.data, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * put 请求
     * @param url 请求地址
     * @param data 参数
     */
    HttpService.prototype.put = function (param, option) {
        var url = "" + this.host + param.url;
        if (param.host) {
            url = "" + param.host + param.url;
        }
        return this.http
            .put(url, param.data, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * delete 请求
     * @param url 请求地址
     */
    HttpService.prototype.delete = function (param, option) {
        var url = "" + this.host + param.url;
        if (param.host) {
            url = "" + param.host + param.url;
        }
        return this.http
            .delete(url, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    /**
     * 成功结果
     * @param res 结果
     */
    HttpService.prototype.handleResult = function (res, utils) {
        var body = JSON.parse(Object(orhon_mongol_lib__WEBPACK_IMPORTED_MODULE_7__["M2Unicode"])(JSON.stringify(res)));
        return body || {};
    };
    /**
     * 错误结果
     * @param error 错误信息
     */
    HttpService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // 发生客户端或网络错误。相应处理
            console.error('发生错误:', error.error.message);
        }
        else {
            // 后端返回了不成功的响应代码。
            // 反应体可能包含了什么地方出了问题的线索，
            console.error("\u540E\u7AEF\u8FD4\u56DE\u4EE3\u7801: " + error.status + ", " +
                ("body was: " + error.error));
        }
        // 返回带有面向用户的错误消息的可观测数据
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('发生了不好的事情，请稍后再试。');
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/service/interceptor/interceptor.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/interceptor/interceptor.service.ts ***!
  \************************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.service */ "./src/app/service/utils/utils.service.ts");





var InterceptorService = /** @class */ (function () {
    function InterceptorService(log) {
        this.log = log;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        var started = Date.now();
        var ok;
        var authReq;
        authReq = req.clone({
            setHeaders: {}
        });
        return next.handle(authReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) { return ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] ? '成功' : ''; }, function (error) { return ok = '失败'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            // const elapsed = Date.now() - started;
            // const msg = `${req.method} -> ${req.urlWithParams} -> ${ok} in ${elapsed} ms.`;
            // tslint:disable-next-line:max-line-length
            // console.log(`%c👽 ${req.method} -> ${req.urlWithParams} -> ${ok} in ${elapsed} ms.`, `background: rgba(23, 35, 61, 0.8); color: ${ok === '成功' ? '#19be6b' : '#ed4014'}`);
            // const data = {
            //     method: req.method,
            //     url: req.urlWithParams,
            //     params: req.body,
            //     status: ok,
            //     elapsed: `${elapsed} ms`
            // };
            // this.log.requestLog(data);
        }));
    };
    InterceptorService.ctorParameters = function () { return [
        { type: _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
    ]; };
    InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/service/utils/utils.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/utils/utils.service.ts ***!
  \************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/video/video.component.scss":
/*!********************************************!*\
  !*** ./src/app/video/video.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-list {\n  width: 100%;\n  height: calc(100vh - var(--bee-header-height));\n  margin-top: var(--bee-header-height);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.bee-list-logo {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n}\n.bee-list-logo img {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n}\n.bee-list-content {\n  flex: 1;\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: calc(var(--bee-padding) / 2);\n  overflow: hidden;\n  background-color: white;\n}\n.bee-list-content .content {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.bee-list-content .content .list-item {\n  flex-basis: calc(25% - 16px);\n  margin: 8px;\n}\n.bee-list-content .list-page {\n  display: flex;\n  justify-content: center;\n  padding: calc(var(--bee-padding) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vRDpcXGxvY2FsaG9zdFxccGMvc3JjXFxhcHBcXHZpZGVvXFx2aWRlby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsOENBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdJO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURHUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREtJO0VBQ0ksT0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0F6QkU7RUEwQkYsZ0JBQUE7RUFDQSx1QkFBQTtBQ0hSO0FES1E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURLWTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtBQ0hoQjtBRE9RO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XHJcblxyXG4uYmVlLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCkpO1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuXHJcbiAgICAmLWxvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tYmVlLW1hcmdpbikgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAkcGFkZGluZztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYygyNSUgLSAxNnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC1wYWdlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCkpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5iZWUtbGlzdC1sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWxpc3QtbG9nbyBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtbGlzdC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgbWFyZ2luOiB2YXIoLS1iZWUtbWFyZ2luKSBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5iZWUtbGlzdC1jb250ZW50IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1saXN0LWNvbnRlbnQgLmNvbnRlbnQgLmxpc3QtaXRlbSB7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gMTZweCk7XG4gIG1hcmdpbjogOHB4O1xufVxuLmJlZS1saXN0LWNvbnRlbnQgLmxpc3QtcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");





var VideoComponent = /** @class */ (function () {
    function VideoComponent(router, http, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.route = route;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
        this.page = 1;
        this.limit = 10;
        this.total = 0;
        this.loading = true;
        this.data = [];
        this.parentLoading = false;
        this.type = '';
        this.detail = '';
        this.playSelect = '0';
        this.route.queryParams.subscribe(function (res) {
            _this.condition = res.id;
            _this.pid = res.pid;
            _this.type = res.type;
            _this.detail = res.detail;
            _this.parentLoading = false;
            _this.getParent(res.pid);
            _this.getData();
        });
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent.prototype.getParent = function (event) {
        var _this = this;
        var param = {
            url: "api.php/cms/sort/scode/" + event
        };
        this.http.get(param).subscribe(function (res) {
            if (res.code === 1) {
                _this.parentData = res.data;
                _this.parentLoading = true;
            }
        });
    };
    VideoComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        var param = {
            url: "api.php/list/" + this.condition + "/page/" + this.page + "/num/" + this.limit,
            data: {}
        };
        this.http.get(param).subscribe(function (res) {
            if (res.code === 1) {
                _this.data = res.data;
                _this.total = res.rowtotal;
            }
            _this.loading = false;
        });
    };
    VideoComponent.prototype.pageChange = function (event) {
        this.page = event;
        this.loading = true;
        this.getData();
    };
    VideoComponent.prototype.limitChange = function (event) {
        this.limit = event;
        this.loading = true;
        this.getData();
    };
    VideoComponent.prototype.itemClikc = function (event) {
        this.playSelect = event.id;
    };
    VideoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/video/video.component.scss")]
        })
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\localhost\pc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map