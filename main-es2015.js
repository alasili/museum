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

module.exports = "<div class=\"bee-card\" [ngStyle]=\"{paddingTop: height ? height : ''}\">\n    <div class=\"bee-card-body\" *ngIf=\"!full\">\n        <div class=\"bee-card-content\" [ngStyle]=\"{float: position === 'left' ? 'left' : 'right', alignItems: position === 'left' ? 'flex-start' : 'flex-end'}\">\n            <div class=\"content\">\n                <div class=\"title\" [innerHTML]=\"title\"></div>\n                <div [innerHTML]=\"description\"></div>\n            </div>\n        </div>\n        <div class=\"bee-card-cover\" [ngStyle]=\"{float: position === 'left' ? 'right' : 'left'}\">\n            <img [src]=\"cover ? host + cover : '../../../assets/image/no-cover.svg'\">\n        </div>\n    </div>\n\n    <div class=\"bee-card-body2\" *ngIf=\"full\">\n        <div class=\"bee-card-content2\">\n            <div class=\"content2\">\n                <div class=\"title\" [innerHTML]=\"title\"></div>\n                <div [innerHTML]=\"description\"></div>\n            </div>\n        </div>\n        <div class=\"bee-card-cover2\">\n            <img [src]=\"cover ? host + cover : '../../../assets/image/no-cover.svg'\">\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-footer/bee-footer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-footer/bee-footer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bee-footer\">\n    <span *ngIf=\"loading\">{{site.copyright}} {{site.icp}}</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-media/bee-media.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-media/bee-media.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orh-media\">\n    <div class=\"orh-media-content1\" *ngIf=\"!autoplay\">\n        <img class=\"orh-media-cover\" [src]=\"cover\">\n    </div>\n    <div class=\"orh-media-content\" *ngIf=\"autoplay\">\n        <vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n            <vg-overlay-play vgFor=\"my-video\"></vg-overlay-play>\n            <vg-buffering></vg-buffering>\n\n            <vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\"3\" class=\"orh-media-controls\" #controls>\n                <vg-time-display class=\"orh-media-time\" vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n                <vg-scrub-bar class=\"orh-media-progress\">\n                    <vg-scrub-bar-current-time class=\"orh-media-current\" [vgSlider]=\"true\"></vg-scrub-bar-current-time>\n                    <vg-scrub-bar-buffering-time class=\"orh-media-buffering\"></vg-scrub-bar-buffering-time>\n                </vg-scrub-bar>\n\n                <div class=\"orh-media-speed\" [ngStyle]=\"{ bottom: speedBottom }\">\n                    <vg-scrub-bar class=\"orh-media-speed-progress\">\n                        <vg-scrub-bar-current-time class=\"orh-media-speed-current\" [vgSlider]=\"true\"></vg-scrub-bar-current-time>\n                        <vg-scrub-bar-buffering-time class=\"orh-media-speed-buffering\"></vg-scrub-bar-buffering-time>\n                    </vg-scrub-bar>\n                </div>\n\n                <vg-time-display class=\"orh-media-time\" vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n                <vg-fullscreen class=\"orh-media-fullscreen\" [ngStyle]=\"{backgroundImage: backgroundImage}\"></vg-fullscreen>\n            </vg-controls>\n\n            <video #myMedia [vgMedia]=\"myMedia\"\n                   id=\"my-video\" preload=\"auto\"\n                   [poster]=\"poster\"\n                   playsinline webkit-playsinline [autoplay]=\"play\">\n                <source [src]=\"url\" type=\"video/mp4\">\n            </video>\n        </vg-player>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/bee-nav/bee-nav.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/bee-nav/bee-nav.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bee-nav\">\n    <div class=\"bee-nav-content\">\n        <div class=\"logo\">\n            <img src=\"../../../assets/image/logo.png\" (click)=\"logoClikc()\">\n        </div>\n        <div class=\"nav\">\n            <div class=\"nav-item\" (click)=\"navChange2()\">\n                ᠨᠢᠭᠤᠷ ᠬᠠᠭᠤᠳᠠᠰᠤ\n            </div>\n\n            <div class=\"nav-item\" *ngFor=\"let item of data; let i = index;\">\n\n                {{ item.name }}\n\n                <div class=\"nav-item-child\" *ngIf=\"item.son.length\">\n\n                    <div class=\"nav-item-child-item\" *ngFor=\"let el of item.son;\" (click)=\"navChange(item, el)\">\n\n                        {{ el.name }}\n\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"nav-item\">\n\n                ᠠᠵᠢᠯ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠦᠯᠦᠭ\n\n                <div class=\"nav-item-child\">\n\n                    <img class=\"erweima\" src=\"../../../assets/image/qun.jpg\">\n\n                </div>\n            </div>\n\n            <div class=\"nav-item\">\n\n                ᠰᠣᠶᠣᠯ ᠤᠨ ᠡᠭᠦᠳᠦᠯᠲᠡ ᠶᠢᠨ ᠪᠢᠴᠢᠯ ᠳᠡᠯᠭᠡᠭᠦᠷ\n\n                <div class=\"nav-item-child\">\n\n                    <img class=\"erweima\" src=\"../../../assets/image/weidian.png\">\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/detail/detail.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/detail/detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\n\n<div class=\"bee-detail\">\n<!--    <div class=\"bee-detail-logo\" *ngIf=\"parentLoading && parentData.pic\">-->\n<!--        <img [src]=\"host + parentData.pic\">-->\n<!--    </div>-->\n\n    <div class=\"bee-detail-body\" *ngIf=\"loading\">\n        <div class=\"bee-detail-title\">\n            <div class=\"title\">{{data.title}}</div>\n            <div class=\"autho\">{{data.author}} - {{data.update_time}}</div>\n        </div>\n        <div class=\"bee-detail-content\" [innerHTML]=\"data.content\"></div>\n    </div>\n</div>\n\n<bee-footer></bee-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\n\n<div id=\"fullpage\">\n\n    <div class=\"section\" id=\"section0\">\n        <div class=\"bee-banner\">\n            <nz-carousel nzAutoPlay>\n                <div nz-carousel-content *ngFor=\"let item of data\">\n                    <img [src]=\"host + item.pic\">\n                </div>\n            </nz-carousel>\n        </div>\n    </div>\n\n    <!-- <div class=\"section\" id=\"section1\">\n        <div class=\"company-logo\">\n            <img src=\"../../assets/image/compoy.png\">\n        </div>\n        <div class=\"company-about\" *ngIf=\"loading\" [innerHTML]=\"about.content\" [ngStyle]=\"{transform: aboutScale}\">\n        </div>\n    </div> -->\n\n    <div class=\"section\" id=\"section2\">\n        <div class=\"news\">\n            <div class=\"news-header\">\n                <span> ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠬᠤ ᠠᠭᠤᠯᠭ᠎ᠠ </span>\n            </div>\n            <div class=\"news-content\" [ngStyle]=\"{left: newLeft}\">\n                <div class=\"new-item\" *ngFor=\"let item of list; let i = index;\" [hidden]=\"i > 3\" (click)=\"itemClikc(item)\">\n                    <div class=\"title\"> {{ item.title }} </div>\n                    <img [src]=\"host + item.ico\">\n                </div>\n                <div class=\"new-more\" (click)=\"newsClikc()\">\n                    <span> ᠨᠡᠩ ᠤᠯᠠᠨ </span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section\" id=\"section3\" [ngStyle]=\"{backgroundImage:'url('+host + collection[collectionIndex]+')'}\">\n        <div class=\"collection\" [ngStyle]=\"{transform: collectionTransform}\" >\n            <img [src]=\"host + collection[collectionIndex]\">\n\n            <div class=\"prev\" *ngIf=\"collectionIndex !== 0\" (click)=\"collectionIndex = collectionIndex - 1\"></div>\n            <div class=\"next\" *ngIf=\"collectionIndex !== collection.length - 1\" (click)=\"collectionIndex = collectionIndex + 1\"></div>\n        </div>\n    </div>\n\n    <div class=\"section\" id=\"section4\">\n        <div class=\"exhibition\" [ngStyle]=\"{transform: exhibitionTransform}\">\n            <div class=\"exhibition-header\">\n                <span> ᠽᠦᠢ ᠰᠢᠨ ᠦᠵᠡᠰᠬᠦᠯᠡᠩ </span>\n            </div>\n\n            <div class=\"exhibition-content\">\n                <div class=\"new-item\" *ngFor=\"let item of exhibition; let i = index;\" [hidden]=\"i > 4\" (click)=\"itemClikc(item)\">\n                    <div class=\"title\"> {{ item.description }} </div>\n                    <img [src]=\"host + item.ico\">\n                </div>\n\n                <div class=\"new-more\" (click)=\"exhibitionClikc()\">\n                    <span> ᠨᠡᠩ ᠤᠯᠠᠨ </span>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section\" id=\"section5\">\n        <div class=\"notice\" [ngStyle]=\"{right: noticeRight}\">\n            <div class=\"notice-item\">\n                <div class=\"title\">\n                    <span> ᠳᠡᠯᠭᠡᠭᠦᠷ ᠨᠡᠭᠡᠭᠡᠬᠦ ᠴᠠᠭ </span>\n                </div>\n                <div class=\"content\" *ngIf=\"timeLoading\" [innerHTML]=\"timeData.content\"></div>\n            </div>\n            <div class=\"notice-item\">\n                <div class=\"title\">\n                    <span> ᠵᠠᠮ ᠬᠠᠷᠢᠯᠴᠠᠭᠠᠨ ᠤ ᠱᠤᠭᠤᠮ</span>\n                </div>\n                <div class=\"content\" *ngIf=\"trafficLoading\" [innerHTML]=\"trafficData.content\"></div>\n            </div>\n            <div class=\"notice-item\">\n                <div class=\"title\">\n                    <span> ᠵᠤᠭᠠᠴᠠᠭᠰᠠᠳ ᠤᠨ ᠮᠡᠳᠡᠬᠦ ᠶᠣᠰᠣᠲᠠᠶ ᠵᠦᠶᠯ </span>\n                </div>\n                <div class=\"content\" *ngIf=\"noticeLoading\" [innerHTML]=\"noticeData.content\"></div>\n            </div>\n        </div>\n\n        <bee-footer></bee-footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\n\n<div class=\"bee-list\">\n\n    <div class=\"bee-list-logo\" *ngIf=\"parentLoading\">\n        <img [src]=\"host + parentData.pic\">\n    </div>\n\n    <div class=\"bee-list-content\">\n        <div class=\"content2\" *ngIf=\"type === 'exhibition'\">\n            <bee-card *ngFor=\"let item of data; let i = index;\" (click)=\"itemClikc(item)\" [cover]=\"item.ico\" [title]=\"item.title\" [description]=\"item.description\"\n                      [position]=\"i % 2 === 0 ? 'left' : 'right'\" height=\"240px\"></bee-card>\n        </div>\n\n        <div class=\"content\" *ngIf=\"!type\">\n            <div class=\"list-item\" *ngFor=\"let item of data;\" (click)=\"itemClikc(item)\">\n                <bee-card [full]=\"true\" [cover]=\"item.ico\" [title]=\"item.title\"></bee-card>\n            </div>\n        </div>\n\n        <div class=\"\" *ngIf=\"loading\">\n            <nz-skeleton [nzActive]=\"true\"></nz-skeleton>\n        </div>\n\n        <div class=\"list-page\" *ngIf=\"total !== 0\">\n            <nz-pagination [nzPageIndex]=\"page\" [nzTotal]=\"total\" (nzPageIndexChange)=\"pageChange($event)\"\n                           (nzPageSizeChange)=\"limitChange($event)\" nzShowSizeChanger\n                           [nzPageSize]=\"limit\"></nz-pagination>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/video/video.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bee-nav></bee-nav>\n\n<div class=\"bee-list\">\n\n    <div class=\"bee-list-logo\" *ngIf=\"parentLoading\">\n        <img [src]=\"host + parentData.pic\">\n    </div>\n\n    <div class=\"bee-list-content\">\n\n        <div class=\"content\">\n            <div class=\"list-item\" *ngFor=\"let item of data;\" (click)=\"itemClikc(item)\">\n                <bee-media [autoplay]=\"playSelect === item.id\" [cover]=\"host + item.ico\" [url]=\"item.enclosure\"></bee-media>\n            </div>\n        </div>\n\n        <div class=\"\" *ngIf=\"loading\">\n            <nz-skeleton [nzActive]=\"true\"></nz-skeleton>\n        </div>\n\n\n        <div class=\"list-page\" *ngIf=\"total !== 0\">\n            <nz-pagination [nzPageIndex]=\"page\" [nzTotal]=\"total\" (nzPageIndexChange)=\"pageChange($event)\"\n                           (nzPageSizeChange)=\"limitChange($event)\" nzShowSizeChanger\n                           [nzPageSize]=\"limit\"></nz-pagination>\n        </div>\n    </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");







const routes = [
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-banner {\n  height: 100%;\n}\n\n:host ::ng-deep .slick-initialized {\n  height: 100% !important;\n}\n\n:host ::ng-deep .ant-carousel .slick-slide img {\n  width: 100% !important;\n}\n\n:host ::ng-deep .slick-slide {\n  height: 100% !important;\n}\n\n:host ::ng-deep .slick-list {\n  height: 100% !important;\n}\n\n:host ::ng-deep .slick-track {\n  height: 100% !important;\n}\n\n:host ::ng-deep .ant-carousel .slick-initialized .slick-slide {\n  height: 100% !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n:host ::ng-deep .ant-carousel .slick-initialized .slick-slide img {\n  height: 100% !important;\n  display: flex;\n}\n\n:host ::ng-deep .slick-dots li {\n  height: 34px;\n  width: 34px;\n  background-image: url('banner.png');\n  background-repeat: no-repeat;\n  background-size: 34px 34px;\n  background-position: 50%;\n}\n\n:host ::ng-deep .slick-dots li button {\n  display: none;\n}\n\n:host ::ng-deep .slick-dots .slick-active {\n  background-image: url('banner-active.png');\n}\n\n:host ::ng-deep .ant-carousel .slick-dots {\n  height: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RcXG15IHByb2plY3RcXGFuZ3VsYXIgcGMgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmVlLWJhbm5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc2xpY2staW5pdGlhbGl6ZWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYW50LWNhcm91c2VsIC5zbGljay1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1zbGlkZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLXRyYWNrIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJvdXNlbCAuc2xpY2staW5pdGlhbGl6ZWQgLnNsaWNrLXNsaWRlIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYW50LWNhcm91c2VsIC5zbGljay1pbml0aWFsaXplZCAuc2xpY2stc2xpZGUgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1kb3RzIGxpIHtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlL2Jhbm5lci5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzNHB4IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1kb3RzIC5zbGljay1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlL2Jhbm5lci1hY3RpdmUucG5nXCIpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmFudC1jYXJvdXNlbCAuc2xpY2stZG90cyB7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuIiwiLmJlZS1iYW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2xpY2staW5pdGlhbGl6ZWQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2xpY2stc2xpZGUge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2xpY2stdHJhY2sge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWluaXRpYWxpemVkIC5zbGljay1zbGlkZSBpbWcge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zbGljay1kb3RzIGxpIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlL2Jhbm5lci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMzRweCAzNHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2xpY2stZG90cyBsaSBidXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZS9iYW5uZXItYWN0aXZlLnBuZ1wiKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtY2Fyb3VzZWwgLnNsaWNrLWRvdHMge1xuICBoZWlnaHQ6IDM0cHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/app/component/bee-card/bee-card.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/bee-card/bee-card.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-card {\n  width: 100%;\n  padding-top: calc(100% * 0.618);\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.bee-card-body {\n  position: absolute;\n  left: calc(var(--bee-padding, 16px) / 2);\n  right: calc(var(--bee-padding, 16px) / 2);\n  top: calc(var(--bee-padding, 16px) / 2);\n  bottom: calc(var(--bee-padding, 16px) / 2);\n  border-radius: var(--bee-border-radius);\n  border: 1px solid var(--bee-border-color);\n  overflow: hidden;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.bee-card-body:hover {\n  transition: all 0.5s;\n  box-shadow: var(--bee-border-color) 0px 0px 8px;\n}\n.bee-card-content {\n  width: 60%;\n  height: 100%;\n  padding: var(--bee-padding, 16px);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 16px;\n  overflow: hidden;\n  display: flex;\n}\n.bee-card-content .content {\n  max-width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.bee-card-content .content .title {\n  font-weight: bold;\n  font-size: 20px;\n}\n.bee-card-cover {\n  width: 40%;\n  height: 100%;\n  padding: var(--bee-padding, 16px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bee-card-cover img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.bee-card-body2 {\n  position: absolute;\n  left: calc(var(--bee-padding, 16px) / 2);\n  right: calc(var(--bee-padding, 16px) / 2);\n  top: calc(var(--bee-padding, 16px) / 2);\n  bottom: calc(var(--bee-padding, 16px) / 2);\n  border-radius: var(--bee-border-radius);\n  border: 1px solid var(--bee-border-color);\n  overflow: hidden;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n.bee-card-body2:hover {\n  transition: all 0.5s;\n  box-shadow: var(--bee-border-color) 0px 0px 8px;\n}\n.bee-card-body2:hover .bee-card-content2 {\n  left: 0;\n  transition: all 0.5s;\n}\n.bee-card-content2 {\n  max-width: 100%;\n  height: 100%;\n  padding: calc(var(--bee-padding, 16px) / 2);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 16px;\n  overflow: hidden;\n  display: flex;\n  position: absolute;\n  left: -100%;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition: all 0.5s;\n}\n.bee-card-content2 .content2 {\n  max-width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  color: #fff;\n}\n.bee-card-content2 .content2 .title {\n  font-weight: bold;\n  font-size: 20px;\n}\n.bee-card-cover2 {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bee-card-cover2 img {\n  display: flex;\n  min-width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1jYXJkL0Q6XFxwcm9qZWN0XFxteSBwcm9qZWN0XFxhbmd1bGFyIHBjIHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcY29tcG9uZW50XFxiZWUtY2FyZFxcYmVlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9iZWUtY2FyZC9iZWUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDQ1I7QURDUTtFQUNJLG9CQUFBO0VBQ0EsK0NBQUE7QUNDWjtBREdJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0RSO0FER1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBREdZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRGhCO0FETUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNKUjtBRE1RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSlo7QURTSTtFQUNJLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNQUjtBRFNRO0VBQ0ksb0JBQUE7RUFDQSwrQ0FBQTtBQ1BaO0FEVVE7RUFDSSxPQUFBO0VBQ0Esb0JBQUE7QUNSWjtBRGFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUFhLE1BQUE7RUFDYixvQ0FBQTtFQUNBLG9CQUFBO0FDVlI7QURZUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNWWjtBRFlZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDVmhCO0FEZUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDYlI7QURlUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2JaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2JlZS1jYXJkL2JlZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJlZS1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGMoMTAwJSAqIDAuNjE4KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICYtYm9keSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XHJcbiAgICAgICAgcmlnaHQ6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XHJcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xyXG4gICAgICAgIGJvdHRvbTogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1iZWUtYm9yZGVyLXJhZGl1cyk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmVlLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJlZS1ib3JkZXItY29sb3IpIDBweCAwcHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KTtcclxuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvdmVyIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZywgMTZweCk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmLWJvZHkyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICByaWdodDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcclxuICAgICAgICB0b3A6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XHJcbiAgICAgICAgYm90dG9tOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJlZS1ib3JkZXItcmFkaXVzKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZWUtYm9yZGVyLWNvbG9yKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYmVlLWJvcmRlci1jb2xvcikgMHB4IDBweCA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIC5iZWUtY2FyZC1jb250ZW50MiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmLWNvbnRlbnQyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XHJcbiAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMTAwJTsgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG5cclxuICAgICAgICAuY29udGVudDIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvdmVyMiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi5iZWUtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogY2FsYygxMDAlICogMC42MTgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWNhcmQtYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcbiAgcmlnaHQ6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XG4gIHRvcDogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcbiAgYm90dG9tOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1iZWUtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJlZS1ib3JkZXItY29sb3IpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJlZS1jYXJkLWJvZHk6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYm94LXNoYWRvdzogdmFyKC0tYmVlLWJvcmRlci1jb2xvcikgMHB4IDBweCA4cHg7XG59XG4uYmVlLWNhcmQtY29udGVudCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJlZS1jYXJkLWNvbnRlbnQgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuLmJlZS1jYXJkLWNvbnRlbnQgLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5iZWUtY2FyZC1jb3ZlciB7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5iZWUtY2FyZC1jb3ZlciBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4uYmVlLWNhcmQtYm9keTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XG4gIHJpZ2h0OiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xuICB0b3A6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcsIDE2cHgpIC8gMik7XG4gIGJvdHRvbTogY2FsYyh2YXIoLS1iZWUtcGFkZGluZywgMTZweCkgLyAyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYmVlLWJvcmRlci1yYWRpdXMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZWUtYm9yZGVyLWNvbG9yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iZWUtY2FyZC1ib2R5Mjpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBib3gtc2hhZG93OiB2YXIoLS1iZWUtYm9yZGVyLWNvbG9yKSAwcHggMHB4IDhweDtcbn1cbi5iZWUtY2FyZC1ib2R5Mjpob3ZlciAuYmVlLWNhcmQtY29udGVudDIge1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5iZWUtY2FyZC1jb250ZW50MiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nLCAxNnB4KSAvIDIpO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uYmVlLWNhcmQtY29udGVudDIgLmNvbnRlbnQyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgY29sb3I6ICNmZmY7XG59XG4uYmVlLWNhcmQtY29udGVudDIgLmNvbnRlbnQyIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYmVlLWNhcmQtY292ZXIyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYmVlLWNhcmQtY292ZXIyIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");



let BeeCardComponent = class BeeCardComponent {
    constructor() {
        this.height = '';
        this.title = '';
        this.description = '';
        this.full = false;
        this.position = 'left';
        this.cover = '';
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
    }
    ngOnInit() {
    }
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



/***/ }),

/***/ "./src/app/component/bee-footer/bee-footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/bee-footer/bee-footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-footer {\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #c28d3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1mb290ZXIvRDpcXHByb2plY3RcXG15IHByb2plY3RcXGFuZ3VsYXIgcGMgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxjb21wb25lbnRcXGJlZS1mb290ZXJcXGJlZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9iZWUtZm9vdGVyL2JlZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2JlZS1mb290ZXIvYmVlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWUtZm9vdGVyIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4ZDNkO1xyXG59XHJcbiIsIi5iZWUtZm9vdGVyIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGQzZDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");



let BeeFooterComponent = class BeeFooterComponent {
    constructor(http) {
        this.http = http;
        this.loading = false;
    }
    ngOnInit() {
        this.getSite();
    }
    getSite() {
        const params = {
            url: 'api.php/cms/site',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.site = res.data;
                this.loading = true;
            }
        });
    }
};
BeeFooterComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
BeeFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bee-footer',
        template: __webpack_require__(/*! raw-loader!./bee-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/bee-footer/bee-footer.component.html"),
        styles: [__webpack_require__(/*! ./bee-footer.component.scss */ "./src/app/component/bee-footer/bee-footer.component.scss")]
    })
], BeeFooterComponent);



/***/ }),

/***/ "./src/app/component/bee-media/bee-media.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/bee-media/bee-media.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.orh-media {\n  width: 100%;\n  padding-top: calc(100% * 0.5625);\n  position: relative;\n}\n\n.orh-media-content {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.orh-media-content1 {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.orh-media-cover {\n  display: flex;\n  min-width: 100%;\n  height: 100%;\n}\n\n.orh-media-speed {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  bottom: -50px;\n  display: flex;\n  transition: bottom 0.8s;\n}\n\n.orh-media-speed-progress {\n  height: 4px !important;\n  margin: 0 !important;\n}\n\n.orh-media-speed-current {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  border-radius: 0 !important;\n  background-color: rgba(255, 255, 255, 0.35) !important;\n}\n\n.orh-media-speed-buffering {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n}\n\n.orh-media-controls {\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%) !important;\n}\n\n.orh-media-time {\n  color: #c28d3d !important;\n}\n\n.orh-media-current {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  background-color: rgba(255, 255, 255, 0.35) !important;\n}\n\n.orh-media-buffering {\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n}\n\n.orh-media-fullscreen {\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 20px 20px;\n}\n\n:host ::ng-deep .orh-media-progress .slider {\n  z-index: 2;\n  width: 10px !important;\n  height: 10px !important;\n  margin-top: -3px !important;\n  margin-left: -5px !important;\n  background-color: #c28d3d !important;\n}\n\n:host ::ng-deep .orh-media-buffering .background {\n  background-color: #DBDBDB !important;\n}\n\n:host ::ng-deep .orh-media-current .background {\n  z-index: 2;\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  border: none !important;\n  background-color: #c28d3d !important;\n}\n\n:host ::ng-deep .orh-media-speed-progress .slider {\n  z-index: 2;\n  display: none !important;\n}\n\n:host ::ng-deep .orh-media-speed-buffering .background {\n  background-color: #DBDBDB !important;\n  border-radius: 0 !important;\n}\n\n:host ::ng-deep .orh-media-speed-current .background {\n  z-index: 2;\n  top: calc(50% - 2px) !important;\n  height: 4px !important;\n  border: none !important;\n  border-radius: 0 !important;\n  background-color: #c28d3d !important;\n}\n\n:host ::ng-deep .vg-icon-play_arrow {\n  background-image: url('icon-play.svg');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 40px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1tZWRpYS9EOlxccHJvamVjdFxcbXkgcHJvamVjdFxcYW5ndWxhciBwYyBwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGNvbXBvbmVudFxcYmVlLW1lZGlhXFxiZWUtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9iZWUtbWVkaWEvYmVlLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQVMsUUFBQTtFQUFVLE1BQUE7RUFBUSxTQUFBO0FDSW5DOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQVMsUUFBQTtFQUFVLE1BQUE7RUFBUSxTQUFBO0VBQzNCLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTVI7O0FESEk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNLUjs7QURGSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDSVI7O0FERlE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FDSVo7O0FERFE7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzREFBQTtBQ0daOztBREFRO0VBQ0ksK0JBQUE7RUFDQSxzQkFBQTtBQ0VaOztBREVJO0VBQ0ksK0VBQUE7QUNBUjs7QURHSTtFQUNJLHlCQUFBO0FDRFI7O0FESUk7RUFDSSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0RBQUE7QUNGUjs7QURLSTtFQUNJLCtCQUFBO0VBQ0Esc0JBQUE7QUNIUjs7QURNSTtFQUVJLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQ0xSOztBRFNBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUNOSjs7QURTQTtFQUNJLG9DQUFBO0FDTko7O0FEU0E7RUFDSSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUNOSjs7QURTQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtBQ05KOztBRFNBO0VBQ0ksb0NBQUE7RUFDQSwyQkFBQTtBQ05KOztBRFNBO0VBQ0ksVUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUNOSjs7QURTQTtFQUNJLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYmVlLW1lZGlhL2JlZS1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLm9yaC1tZWRpYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiAwLjU2MjUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IDA7IGJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQxIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDsgYm90dG9tOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmLWNvdmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgJi1zcGVlZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gLjhzO1xyXG5cclxuICAgICAgICAmLXByb2dyZXNzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLWN1cnJlbnQge1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMnB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtYnVmZmVyaW5nIHtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb250cm9scyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAxKSAxMDAlKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYtdGltZSB7XHJcbiAgICAgICAgY29sb3I6ICNjMjhkM2QgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLWN1cnJlbnQge1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi1idWZmZXJpbmcge1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLWZ1bGxzY3JlZW4ge1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21lZGlhL2ljb24tZnVsbC5zdmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLXByb2dyZXNzIC5zbGlkZXIge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4ZDNkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLWJ1ZmZlcmluZyAuYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLWN1cnJlbnQgLmJhY2tncm91bmQge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4ZDNkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLXNwZWVkLXByb2dyZXNzIC5zbGlkZXIge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtc3BlZWQtYnVmZmVyaW5nIC5iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQkRCREIgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtc3BlZWQtY3VycmVudCAuYmFja2dyb3VuZCB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhkM2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC52Zy1pY29uLXBsYXlfYXJyb3cge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21lZGlhL2ljb24tcGxheS5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XHJcbn1cclxuIiwidmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ub3JoLW1lZGlhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiBjYWxjKDEwMCUgKiAwLjU2MjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ub3JoLW1lZGlhLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5vcmgtbWVkaWEtY29udGVudDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ub3JoLW1lZGlhLWNvdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ub3JoLW1lZGlhLXNwZWVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjhzO1xufVxuLm9yaC1tZWRpYS1zcGVlZC1wcm9ncmVzcyB7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLm9yaC1tZWRpYS1zcGVlZC1jdXJyZW50IHtcbiAgdG9wOiBjYWxjKDUwJSAtIDJweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpICFpbXBvcnRhbnQ7XG59XG4ub3JoLW1lZGlhLXNwZWVkLWJ1ZmZlcmluZyB7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG4ub3JoLW1lZGlhLWNvbnRyb2xzIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwKSAwJSwgYmxhY2sgMTAwJSkgIWltcG9ydGFudDtcbn1cbi5vcmgtbWVkaWEtdGltZSB7XG4gIGNvbG9yOiAjYzI4ZDNkICFpbXBvcnRhbnQ7XG59XG4ub3JoLW1lZGlhLWN1cnJlbnQge1xuICB0b3A6IGNhbGMoNTAlIC0gMnB4KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpICFpbXBvcnRhbnQ7XG59XG4ub3JoLW1lZGlhLWJ1ZmZlcmluZyB7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59XG4ub3JoLW1lZGlhLWZ1bGxzY3JlZW4ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1wcm9ncmVzcyAuc2xpZGVyIHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0zcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC01cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGQzZCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1idWZmZXJpbmcgLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAub3JoLW1lZGlhLWN1cnJlbnQgLmJhY2tncm91bmQge1xuICB6LWluZGV4OiAyO1xuICB0b3A6IGNhbGMoNTAlIC0gMnB4KSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGQzZCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1zcGVlZC1wcm9ncmVzcyAuc2xpZGVyIHtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm9yaC1tZWRpYS1zcGVlZC1idWZmZXJpbmcgLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5vcmgtbWVkaWEtc3BlZWQtY3VycmVudCAuYmFja2dyb3VuZCB7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYyg1MCUgLSAycHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjhkM2QgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC52Zy1pY29uLXBsYXlfYXJyb3cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWVkaWEvaWNvbi1wbGF5LnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BeeMediaComponent = class BeeMediaComponent {
    constructor() {
        this.autoplay = false;
        this.onPlayer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.play = false;
        this.fullStatus = false;
        this.speedBottom = '-50px';
        this.backgroundImage = `url("../../../assets/media/icon-full.svg")`;
        this.poster = '../../../assets/icon/logo.svg';
    }
    ngOnInit() {
    }
    onPlayerReady(api) {
        this.onPlayer.emit(api);
        api.fsAPI.onChangeFullscreen.subscribe(res => {
            if (res) {
                if (res !== this.fullStatus) {
                    this.fullStatus = res;
                }
            }
            else {
                if (res !== this.fullStatus) {
                    this.fullStatus = res;
                }
            }
        });
        api.subscriptions.ended.subscribe(res => {
            this.speedBottom = '-50px';
        });
        api.subscriptions.timeUpdate.subscribe(res => {
            if (this.controls.hideControls) {
                this.speedBottom = '50px';
            }
            else {
                this.speedBottom = '-50px';
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.autoplay) {
            this.play = true;
        }
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



/***/ }),

/***/ "./src/app/component/bee-nav/bee-nav.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/bee-nav/bee-nav.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: var(--bee-header-height);\n  background-image: url('header-bg.jpg');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 160px;\n  z-index: 99;\n}\n.bee-nav-content {\n  display: flex;\n  justify-content: space-between;\n  width: var(--bee-body-width);\n  height: 100%;\n  margin: 0 auto;\n}\n.bee-nav-content .logo {\n  height: 100%;\n  padding: var(--bee-padding) 0;\n  overflow: hidden;\n}\n.bee-nav-content .logo img {\n  display: flex;\n}\n.bee-nav-content .nav {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n  margin-left: var(--bee-margin);\n}\n.bee-nav-content .nav-item {\n  height: 100%;\n  padding: var(--bee-padding) calc(var(--bee-padding) / 2);\n  font-family: var(--bee-font-family);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-size: 25px;\n  position: relative;\n  cursor: pointer;\n  color: #17233d;\n  font-weight: bold;\n}\n.bee-nav-content .nav-item:hover {\n  color: #C28D3D;\n}\n.bee-nav-content .nav-item:hover .nav-item-child {\n  height: var(--bee-header-height);\n  transition: height 0.3s;\n}\n.bee-nav-content .nav-item-child {\n  display: flex;\n  flex-direction: column;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: 0;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  transition: height 0.3s;\n  padding: 0 calc(var(--bee-padding) / 2);\n  border-radius: 0 0 var(--bee-border-radius) var(--bee-border-radius);\n}\n.bee-nav-content .nav-item-child-item {\n  height: var(--bee-header-height);\n  padding: var(--bee-padding) calc(var(--bee-padding) / 2);\n  font-family: var(--bee-font-family);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-size: 20px;\n  position: relative;\n  cursor: pointer;\n  color: #fff;\n}\n.bee-nav-content .nav-item-child-item:hover {\n  color: #C28D3D;\n}\n.bee-nav-content .nav-item-child .erweima {\n  display: flex;\n  height: 118px;\n  margin: var(--bee-padding) calc(var(--bee-padding) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JlZS1uYXYvRDpcXHByb2plY3RcXG15IHByb2plY3RcXGFuZ3VsYXIgcGMgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxjb21wb25lbnRcXGJlZS1uYXZcXGJlZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9iZWUtbmF2L2JlZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUFTLE1BQUE7RUFDVCxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERVE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0FaO0FERVk7RUFDSSxhQUFBO0FDQWhCO0FESVE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDRlo7QURJWTtFQUNJLFlBQUE7RUFDQSx3REFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0ZoQjtBRElnQjtFQUNJLGNBakRKO0FDK0NoQjtBREdvQjtFQUNJLGdDQUFBO0VBQ0EsdUJBQUE7QUNEeEI7QURLZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQVcsUUFBQTtFQUNYLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0VBQUE7QUNGcEI7QURJb0I7RUFDSSxnQ0FBQTtFQUNBLHdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0Z4QjtBREl3QjtFQUNJLGNBaEZaO0FDOEVoQjtBRE1vQjtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdURBQUE7QUNKeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvYmVlLW5hdi9iZWUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICNDMjhEM0Q7XHJcblxyXG4uYmVlLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwOyB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2UvaGVhZGVyLWJnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxNjBweDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tYmVlLW1hcmdpbik7XHJcblxyXG4gICAgICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzE3MjMzZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAubmF2LWl0ZW0tY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTAwJTsgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWJlZS1ib3JkZXItcmFkaXVzKSB2YXIoLS1iZWUtYm9yZGVyLXJhZGl1cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5lcndlaW1hIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1iZWUtcGFkZGluZykgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmJlZS1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2UvaGVhZGVyLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTYwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuLmJlZS1uYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5iZWUtbmF2LWNvbnRlbnQgLmxvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1uYXYtY29udGVudCAubG9nbyBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJlZS1uYXYtY29udGVudCAubmF2IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tYmVlLW1hcmdpbik7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzE3MjMzZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uYmVlLW5hdi1jb250ZW50IC5uYXYtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjQzI4RDNEO1xufVxuLmJlZS1uYXYtY29udGVudCAubmF2LWl0ZW06aG92ZXIgLm5hdi1pdGVtLWNoaWxkIHtcbiAgaGVpZ2h0OiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xufVxuLmJlZS1uYXYtY29udGVudCAubmF2LWl0ZW0tY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1iZWUtYm9yZGVyLXJhZGl1cykgdmFyKC0tYmVlLWJvcmRlci1yYWRpdXMpO1xufVxuLmJlZS1uYXYtY29udGVudCAubmF2LWl0ZW0tY2hpbGQtaXRlbSB7XG4gIGhlaWdodDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJlZS1uYXYtY29udGVudCAubmF2LWl0ZW0tY2hpbGQtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjQzI4RDNEO1xufVxuLmJlZS1uYXYtY29udGVudCAubmF2LWl0ZW0tY2hpbGQgLmVyd2VpbWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDExOHB4O1xuICBtYXJnaW46IHZhcigtLWJlZS1wYWRkaW5nKSBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let BeeNavComponent = class BeeNavComponent {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.navid = null;
        this.data = [];
        this.route.queryParams.subscribe(res => {
            this.navid = res.id;
        });
    }
    ngOnInit() {
        this.getNav();
    }
    getNav() {
        const params = {
            url: 'api.php/cms/nav',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
            }
        });
    }
    navChange2() {
        this.router.navigate(['/home']);
    }
    navChange(parent, event) {
        console.log(event, 'nav.sss');
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
    }
    handleNav1(parent, event) {
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
    }
    handleNav2(parent, event) {
        const bool = event.filename.includes('exhibition');
        const detail = event.filename.includes('nodetail');
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
    }
    logoClikc() {
        this.router.navigate(['/home']);
    }
};
BeeNavComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
BeeNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bee-nav',
        template: __webpack_require__(/*! raw-loader!./bee-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/bee-nav/bee-nav.component.html"),
        styles: [__webpack_require__(/*! ./bee-nav.component.scss */ "./src/app/component/bee-nav/bee-nav.component.scss")]
    })
], BeeNavComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bee_card_bee_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bee-card/bee-card.component */ "./src/app/component/bee-card/bee-card.component.ts");
/* harmony import */ var _bee_media_bee_media_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bee-media/bee-media.component */ "./src/app/component/bee-media/bee-media.component.ts");














let ComponentModule = class ComponentModule {
};
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

module.exports = ".bee-detail {\n  width: 100%;\n  height: calc(100vh - 45px - var(--bee-header-height));\n  margin-top: var(--bee-header-height);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.bee-detail-logo {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n}\n.bee-detail-logo img {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n}\n.bee-detail-body {\n  flex: 1;\n  display: flex;\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: var(--bee-padding);\n  background-color: #fff;\n  overflow: hidden;\n}\n.bee-detail-title {\n  display: flex;\n}\n.bee-detail-title .title {\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-size: 26px;\n  font-weight: bold;\n  font-family: var(--bee-font-family);\n  padding: 0 var(--bee-padding);\n  display: flex;\n  justify-content: center;\n}\n.bee-detail-title .autho {\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  padding: var(--bee-padding);\n  background-color: rgba(194, 141, 61, 0.3);\n  border-right: 2px solid #C28D3D;\n  font-size: 18px;\n  font-family: var(--bee-font-family);\n}\n.bee-detail-content {\n  flex: 1;\n  height: 100%;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL0Q6XFxwcm9qZWN0XFxteSBwcm9qZWN0XFxhbmd1bGFyIHBjIHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcZGV0YWlsXFxkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EscURBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ1o7QURHSTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0FDRlI7QURJUTtFQUNJLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNGWjtBRElRO0VBQ0ksaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDRlo7QURNSTtFQUNJLE9BQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWUtZGV0YWlsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDVweCAtIHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KSk7XHJcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1iZWUtaGVhZGVyLWhlaWdodCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJi1sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWJvZHkge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tYmVlLW1hcmdpbikgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIHZhcigtLWJlZS1wYWRkaW5nKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hdXRobyB7XHJcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTQsIDE0MSwgNjEsIDAuMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNDMjhEM0Q7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuIiwiLmJlZS1kZXRhaWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDVweCAtIHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KSk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iZWUtZGV0YWlsLWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtZGV0YWlsLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWRldGFpbC1ib2R5IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgbWFyZ2luOiB2YXIoLS1iZWUtbWFyZ2luKSBhdXRvO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWRldGFpbC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYmVlLWRldGFpbC10aXRsZSAudGl0bGUge1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgcGFkZGluZzogMCB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJlZS1kZXRhaWwtdGl0bGUgLmF1dGhvIHtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTQxLCA2MSwgMC4zKTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0MyOEQzRDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbn1cbi5iZWUtZGV0YWlsLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");





let DetailComponent = class DetailComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.host = _config__WEBPACK_IMPORTED_MODULE_4__["default"].host;
        this.loading = false;
        this.parentLoading = false;
        this.route.queryParams.subscribe(res => {
            this.getParent(res.pid);
            this.getDetail(res.id);
        });
    }
    ngOnInit() {
    }
    getParent(event) {
        const param = {
            url: `api.php/cms/sort/scode/${event}`
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.parentData = res.data;
                this.parentLoading = true;
            }
        });
    }
    getDetail(event) {
        const params = {
            url: `api.php/content/${event}`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                const data = res.data;
                data.content = data.content.replace(/src=["]/g, `src="${this.host}`);
                this.data = data;
                this.loading = true;
            }
        });
    }
};
DetailComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/detail/detail.component.html"),
        styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/detail/detail.component.scss")]
    })
], DetailComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");



let ImageUrlDirective = class ImageUrlDirective {
    constructor(el) {
        this.el = el;
        this.host = _config__WEBPACK_IMPORTED_MODULE_2__["default"].host;
    }
    ngOnChanges(changes) {
        if (changes.appImageUrl && changes.appImageUrl.currentValue) {
            let data = changes.appImageUrl.currentValue;
            data = data.replace(/src=["]/g, `src="${this.host}`);
        }
    }
};
ImageUrlDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageUrlDirective.prototype, "appImageUrl", void 0);
ImageUrlDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appImageUrl]'
    })
], ImageUrlDirective);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-list {\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: calc(var(--bee-padding) / 2);\n  overflow: hidden;\n  background-color: white;\n}\n.home-list .content {\n  display: flex;\n  flex-wrap: wrap;\n}\n.home-list .content .list-item {\n  flex-basis: 25%;\n}\n.bee-banner {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.bee-banner nz-carousel {\n  height: 100%;\n}\n.section {\n  overflow: hidden;\n}\n.company-logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.company-logo img {\n  height: 250px;\n  display: flex;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.company-about {\n  background-color: #eeeeee;\n  width: var(--bee-body-width);\n  height: calc(100% - 350px);\n  margin: 0 auto;\n  margin-bottom: 100px;\n  font-family: var(--bee-font-family);\n  font-size: 16px;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.5s;\n}\n#section2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.news {\n  width: var(--bee-body-width);\n  background-color: #2d446e;\n  border-radius: 20px;\n}\n.news-header {\n  height: 100px;\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.news-header span {\n  color: white;\n  height: 100%;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 25px;\n  font-weight: bolder;\n  text-align: center;\n  position: relative;\n}\n.news-header span:before {\n  content: \"\";\n  background-image: url('title-left.png');\n  background-repeat: no-repeat;\n  background-size: auto 100px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -100px;\n  width: 100px;\n}\n.news-header span:after {\n  content: \"\";\n  background-image: url('title-right.png');\n  background-repeat: no-repeat;\n  background-size: auto 100px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -100px;\n  width: 145px;\n}\n.news-header img {\n  display: flex;\n  height: 100%;\n}\n.news-content {\n  width: 100%;\n  height: 250px;\n  max-height: 400px;\n  margin: 100px auto;\n  position: relative;\n  transition: all 0.5s;\n  padding: var(--bee-padding);\n  overflow: hidden;\n  display: flex;\n}\n.news-content .new-item {\n  flex: 1;\n  flex-basis: calc(33.33% - 112px);\n  height: 100%;\n  margin-left: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.news-content .new-item:first-child {\n  margin: 0;\n}\n.news-content .new-item:hover .title {\n  left: 0;\n  transition: all 0.5s;\n}\n.news-content .new-item .title {\n  height: 100%;\n  position: absolute;\n  left: -100%;\n  top: 0;\n  padding: var(--bee-padding);\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  color: #fff;\n  transition: all 0.5s;\n}\n.news-content .new-item img {\n  display: flex;\n  min-height: 100%;\n  min-width: 100%;\n}\n.news-content .new-more {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.news-content .new-more span {\n  text-align: right;\n  color: white;\n  font-size: 12px;\n  line-height: 48px;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n}\n.notice {\n  width: var(--bee-body-width);\n  height: calc(100% - 145px);\n  margin: 50px auto;\n  padding: var(--bee-padding);\n  position: relative;\n  transition: all 0.5s;\n  overflow-x: auto;\n  overflow-y: hidden;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\n.notice-item {\n  height: 100%;\n  margin-left: var(--bee-margin);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.notice-item:first-child {\n  margin-left: 0;\n}\n.notice-item .title {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  background-color: #C28D3D;\n  overflow: hidden;\n  padding: var(--bee-padding) 0;\n}\n.notice-item .title span {\n  width: 100%;\n  line-height: 48px;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  color: #fff;\n}\n.notice-item .content {\n  height: 100%;\n  margin-left: var(--bee-margin);\n  padding: var(--bee-padding) 0;\n}\n.notice-item .content .tent {\n  overflow: hidden;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n}\n:host ::ng-deep .notice p {\n  font-size: 20px;\n  font-family: \"NotoSansNormal\";\n}\n#section3 {\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.collection {\n  width: var(--bee-body-width);\n  height: calc(100% - 100px);\n  margin: 50px auto;\n  transition: all 0.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--bee-padding);\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.collection img {\n  display: flex;\n  max-height: 100%;\n  max-width: 100%;\n}\n.collection .prev {\n  position: absolute;\n  left: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  width: 20px;\n  height: 36px;\n  border: none;\n  background-image: url('ban_prev_hover.png');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 20px 36px;\n  cursor: pointer;\n}\n.collection .next {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  width: 20px;\n  height: 36px;\n  border: none;\n  background-image: url('ban_next_hover.png');\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 20px 36px;\n  cursor: pointer;\n}\n.exhibition {\n  width: var(--bee-body-width);\n  height: calc(100% - 100px);\n  margin: 50px auto;\n  transition: all 0.5s;\n}\n.exhibition-header {\n  height: 100px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.exhibition-header span {\n  height: 100%;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 25px;\n  font-weight: bolder;\n  text-align: center;\n}\n.exhibition-header img {\n  display: flex;\n  height: 100%;\n}\n.exhibition-content {\n  width: 100%;\n  height: calc(100% - 150px);\n  margin: 0 auto;\n  position: relative;\n  transition: all 0.5s;\n  padding: var(--bee-padding);\n  overflow: hidden;\n  display: flex;\n  max-height: 400px;\n}\n.exhibition-content .new-item {\n  flex: 1;\n  flex-basis: calc(33.33% - 112px);\n  height: 100%;\n  margin-left: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.exhibition-content .new-item:first-child {\n  margin: 0;\n}\n.exhibition-content .new-item:hover .title {\n  left: 0;\n  transition: all 0.5s;\n}\n.exhibition-content .new-item .title {\n  height: 100%;\n  position: absolute;\n  left: -100%;\n  top: 0;\n  padding: var(--bee-padding);\n  background-color: rgba(0, 0, 0, 0.4);\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n  color: #fff;\n  transition: all 0.5s;\n}\n.exhibition-content .new-item img {\n  display: flex;\n  min-height: 100%;\n  min-width: 100%;\n}\n.exhibition-content .new-more {\n  width: 48px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.exhibition-content .new-more span {\n  width: 100%;\n  line-height: 48px;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n  font-family: var(--bee-font-family);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxccHJvamVjdFxcbXkgcHJvamVjdFxcYW5ndWxhciBwYyBwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBR0ksYUFBQTtFQUNBLGVBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtBQ0RaO0FETUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7QUNIUjtBRE9BO0VBQ0ksZ0JBQUE7QUNKSjtBRFFBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNOSjtBRE9JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTFI7QURTQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFHQSxvQkFBQTtBQ1JKO0FEV0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1JKO0FEV0E7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFNJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNQUjtBRFNRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQWjtBRFNZO0VBQ0ksV0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUFRLFNBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtBQ05oQjtBRFNZO0VBQ0ksV0FBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUFRLFNBQUE7RUFDUixhQUFBO0VBQ0EsWUFBQTtBQ05oQjtBRFVRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNSWjtBRFlJO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDWFI7QURhUTtFQUNJLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNYWjtBRGFZO0VBQ0ksU0FBQTtBQ1hoQjtBRGNZO0VBQ0ksT0FBQTtFQUNBLG9CQUFBO0FDWmhCO0FEZVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQWEsTUFBQTtFQUNiLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNaaEI7QURlWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNiaEI7QURpQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLGVBQUE7QUNoQlo7QURrQlk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUNoQmhCO0FEc0JBO0VBQ0ksNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO01BQUEsdUJBQUE7VUFBQSx5QkFBQTtBQ25CSjtBRHFCSTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDbkJSO0FEcUJRO0VBQ0ksY0FBQTtBQ25CWjtBRHNCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ3BCWjtBRHNCWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNwQmhCO0FEd0JRO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUN0Qlo7QUR3Qlk7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZUFBQTtBQ3RCaEI7QUQ2QkE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUMxQko7QUQ2QkE7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUMxQko7QUQ2QkE7RUFDSSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQzFCSjtBRDZCSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMzQlI7QUQ4Qkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFBWSxRQUFBO0VBQ1osMkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDM0JSO0FENkJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQWEsUUFBQTtFQUNiLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQzFCUjtBRDhCQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDM0JKO0FENkJJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzNCUjtBRDZCUTtFQUNJLFlBQUE7RUFDQSxpQ0FBQTtNQUFBLHVCQUFBO1VBQUEseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDM0JaO0FEOEJRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUM1Qlo7QURnQ0k7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUM5QlI7QURnQ1E7RUFDSSxPQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDOUJaO0FEZ0NZO0VBQ0ksU0FBQTtBQzlCaEI7QURpQ1k7RUFDSSxPQUFBO0VBQ0Esb0JBQUE7QUMvQmhCO0FEa0NZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUFhLE1BQUE7RUFDYiwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDL0JoQjtBRGtDWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNoQ2hCO0FEb0NRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxlQUFBO0FDbkNaO0FEcUNZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7TUFBQSx1QkFBQTtVQUFBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDbkNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWxpc3Qge1xuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gICAgbWFyZ2luOiB2YXIoLS1iZWUtbWFyZ2luKSBhdXRvO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgLy9tYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1iZWUtbWFyZ2luKSAvIC0yKTtcbiAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tYmVlLW1hcmdpbikgLyAtMik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJlZS1iYW5uZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBuei1jYXJvdXNlbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbi5zZWN0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG59XG5cbi5jb21wYW55LWxvZ28ge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxufVxuXG4uY29tcGFueS1hYm91dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNTBweCk7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jc2VjdGlvbjIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3Mge1xuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCA2OCwgMTEwKTtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgJi1oZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL3RpdGxlLWxlZnQucG5nJyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDsgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL3RpdGxlLXJpZ2h0LnBuZycpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7IGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogLTEwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNTBweCk7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5uZXctaXRlbSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZmxleC1iYXNpczogY2FsYygzMy4zMyUgLSAxMTJweCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMCU7IHRvcDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXctbW9yZSB7XG4gICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm90aWNlIHtcbiAgICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTQ1cHgpO1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuXG4gICAgJi1pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tYmVlLW1hcmdpbik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzI4RDNEO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tYmVlLW1hcmdpbik7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZykgMDtcblxuICAgICAgICAgICAgLnRlbnQge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbjpob3N0IDo6bmctZGVlcCAubm90aWNlIHAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogJ05vdG9TYW5zTm9ybWFsJztcbn1cblxuI3NlY3Rpb24zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmNvbGxlY3Rpb24ge1xuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcblxuXG4gICAgaW1nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5wcmV2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNXB4OyB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlL2Jhbl9wcmV2X2hvdmVyLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAzNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5uZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDsgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZS9iYW5fbmV4dF9ob3Zlci5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMzZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmV4aGliaXRpb24ge1xuICAgIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcblxuICAgICYtaGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLWNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTBweCk7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG5cbiAgICAgICAgLm5ldy1pdGVtIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDExMnB4KTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTAwJTsgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5ldy1tb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5ob21lLWxpc3Qge1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBtYXJnaW46IHZhcigtLWJlZS1tYXJnaW4pIGF1dG87XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmhvbWUtbGlzdCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ob21lLWxpc3QgLmNvbnRlbnQgLmxpc3QtaXRlbSB7XG4gIGZsZXgtYmFzaXM6IDI1JTtcbn1cblxuLmJlZS1iYW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmVlLWJhbm5lciBuei1jYXJvdXNlbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlY3Rpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29tcGFueS1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29tcGFueS1sb2dvIGltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5jb21wYW55LWFib3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNTBweCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuI3NlY3Rpb24yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXdzIHtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDQ2ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5uZXdzLWhlYWRlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5ld3MtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmV3cy1oZWFkZXIgc3BhbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvdGl0bGUtbGVmdC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogLTEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4ubmV3cy1oZWFkZXIgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS90aXRsZS1yaWdodC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC0xMDBweDtcbiAgd2lkdGg6IDE0NXB4O1xufVxuLm5ld3MtaGVhZGVyIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5uZXdzLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMTAwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5ld3MtY29udGVudCAubmV3LWl0ZW0ge1xuICBmbGV4OiAxO1xuICBmbGV4LWJhc2lzOiBjYWxjKDMzLjMzJSAtIDExMnB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ldy1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuLm5ld3MtY29udGVudCAubmV3LWl0ZW06aG92ZXIgLnRpdGxlIHtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4ubmV3cy1jb250ZW50IC5uZXctaXRlbSAudGl0bGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5uZXdzLWNvbnRlbnQgLm5ldy1pdGVtIGltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ldy1tb3JlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ldy1tb3JlIHNwYW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubm90aWNlIHtcbiAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNDVweCk7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbn1cbi5ub3RpY2UtaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWJlZS1tYXJnaW4pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm5vdGljZS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4ubm90aWNlLWl0ZW0gLnRpdGxlIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MyOEQzRDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpIDA7XG59XG4ubm90aWNlLWl0ZW0gLnRpdGxlIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWUtZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGljZS1pdGVtIC5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogdmFyKC0tYmVlLW1hcmdpbik7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKSAwO1xufVxuLm5vdGljZS1pdGVtIC5jb250ZW50IC50ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5ub3RpY2UgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNOb3JtYWxcIjtcbn1cblxuI3NlY3Rpb24zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmNvbGxlY3Rpb24ge1xuICB3aWR0aDogdmFyKC0tYmVlLWJvZHktd2lkdGgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tYmVlLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG4uY29sbGVjdGlvbiBpbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY29sbGVjdGlvbiAucHJldiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2UvYmFuX3ByZXZfaG92ZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweCAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29sbGVjdGlvbiAubmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2Jhbl9uZXh0X2hvdmVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhoaWJpdGlvbiB7XG4gIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uZXhoaWJpdGlvbi1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5leGhpYml0aW9uLWhlYWRlciBzcGFuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICBmb250LWZhbWlseTogdmFyKC0tYmVlLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZXhoaWJpdGlvbi1oZWFkZXIgaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmV4aGliaXRpb24tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE1MHB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHBhZGRpbmc6IHZhcigtLWJlZS1wYWRkaW5nKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG4uZXhoaWJpdGlvbi1jb250ZW50IC5uZXctaXRlbSB7XG4gIGZsZXg6IDE7XG4gIGZsZXgtYmFzaXM6IGNhbGMoMzMuMzMlIC0gMTEycHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmV4aGliaXRpb24tY29udGVudCAubmV3LWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG4uZXhoaWJpdGlvbi1jb250ZW50IC5uZXctaXRlbTpob3ZlciAudGl0bGUge1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5leGhpYml0aW9uLWNvbnRlbnQgLm5ldy1pdGVtIC50aXRsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAwJTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiB2YXIoLS1iZWUtcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmV4aGliaXRpb24tY29udGVudCAubmV3LWl0ZW0gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmV4aGliaXRpb24tY29udGVudCAubmV3LW1vcmUge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmV4aGliaXRpb24tY29udGVudCAubmV3LW1vcmUgc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJlZS1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(http, cdr, router) {
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
    ngOnInit() {
        this.getBanner();
        this.getAbout();
        this.getRecommend();
        this.getNotice();
        this.getTraffic();
        this.getTime();
        this.getCollection();
        this.getExhibition();
    }
    ngOnDestroy() {
        $.fn.fullpage.destroy('all');
    }
    jqueryPage() {
        const that = this;
        $(() => {
            $('#fullpage').fullpage({
                navigation: true,
                verticalCentered: false,
                navigationColor: '#c28d3d',
                loopBottom: true,
                paddingTop: 150,
                afterLoad: (anchorLink, index) => {
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
                onLeave: (index, direction) => {
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
    }
    getBanner() {
        const params = {
            url: 'api.php/cms/slide/gid/1',
            data: {}
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
            }
        });
    }
    getAbout() {
        const params = {
            url: 'api.php/about/1',
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.about = res.data;
                this.loading = true;
            }
        });
    }
    getRecommend() {
        const params = {
            url: 'api.php/cms/search',
            data: 'isrecommend=1'
        };
        this.http.post(params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        }).subscribe(res => {
            if (res.code === 1) {
                this.list = res.data;
            }
        });
    }
    itemClikc(event) {
        this.router.navigate(['/detail'], { queryParams: { id: event.id } });
    }
    getNotice() {
        const params = {
            url: `api.php/about/25`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.noticeData = res.data;
                this.noticeLoading = true;
            }
        });
    }
    newsClikc() {
        this.router.navigate(['/list'], { queryParams: { pid: 12, id: 19 } });
    }
    getCollection() {
        const params = {
            url: `api.php/cms/search`,
            data: 'scode=28'
        };
        this.http.post(params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            }
        }).subscribe(res => {
            if (res.code === 1 && res.data.length) {
                const arr = res.data[0].pics.split(',');
                this.collection = arr;
                this.cdr.detectChanges();
                this.collectionAni = setInterval(() => {
                    if (this.collectionIndex < this.collection.length - 1) {
                        this.collectionIndex += 1;
                    }
                    else {
                        this.collectionIndex = 0;
                    }
                }, 3000);
            }
        });
    }
    getExhibition() {
        const params = {
            url: `api.php/list/29/page/1/num/4`
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.exhibition = res.data;
            }
        });
    }
    exhibitionClikc() {
        this.router.navigate(['/list'], { queryParams: { pid: 13, id: 29, type: 'exhibition' } });
    }
    getTraffic() {
        const params = {
            url: `api.php/about/24`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.trafficData = res.data;
                this.trafficLoading = true;
            }
        });
    }
    getTime() {
        const params = {
            url: `api.php/about/23`,
        };
        this.http.get(params).subscribe(res => {
            if (res.code === 1) {
                this.timeData = res.data;
                this.timeLoading = true;
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/interceptor/interceptor.service */ "./src/app/service/interceptor/interceptor.service.ts");


const httpInterceptorProviders = [
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

module.exports = ".bee-list {\n  width: 100%;\n  height: calc(100vh - var(--bee-header-height));\n  margin-top: var(--bee-header-height);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.bee-list-logo {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n}\n.bee-list-logo img {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n}\n.bee-list-content {\n  flex: 1;\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: calc(var(--bee-padding) / 2);\n  overflow: hidden;\n  background-color: white;\n}\n.bee-list-content .content {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.bee-list-content .content .list-item {\n  flex-basis: 25%;\n}\n.bee-list-content .list-page {\n  display: flex;\n  justify-content: center;\n  padding: calc(var(--bee-padding) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9EOlxccHJvamVjdFxcbXkgcHJvamVjdFxcYW5ndWxhciBwYyBwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FER0k7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RaO0FES0k7RUFDSSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQXpCRTtFQTBCRixnQkFBQTtFQUNBLHVCQUFBO0FDSFI7QURLUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBREtZO0VBQ0ksZUFBQTtBQ0hoQjtBRE9RO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG5cclxuLmJlZS1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpKTtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICAgJi1sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLWJlZS1tYXJnaW4pIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3QtcGFnZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYmVlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uYmVlLWxpc3QtbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1saXN0LWxvZ28gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWxpc3QtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gIG1hcmdpbjogdmFyKC0tYmVlLW1hcmdpbikgYXV0bztcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYmVlLWxpc3QtY29udGVudCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtbGlzdC1jb250ZW50IC5jb250ZW50IC5saXN0LWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAyNSU7XG59XG4uYmVlLWxpc3QtY29udGVudCAubGlzdC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tYmVlLXBhZGRpbmcpIC8gMik7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");





let ListComponent = class ListComponent {
    constructor(router, http, route) {
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
        this.route.queryParams.subscribe(res => {
            this.condition = res.id;
            this.pid = res.pid;
            this.type = res.type;
            this.detail = res.detail;
            this.parentLoading = false;
            this.getParent(res.pid);
            this.getData();
        });
    }
    ngOnInit() {
    }
    getParent(event) {
        const param = {
            url: `api.php/cms/sort/scode/${event}`
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.parentData = res.data;
                this.parentLoading = true;
            }
        });
    }
    getData() {
        this.data = [];
        const param = {
            url: `api.php/list/${this.condition}/page/${this.page}/num/${this.limit}`,
            data: {}
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
                this.total = res.rowtotal;
            }
            this.loading = false;
        });
    }
    pageChange(event) {
        this.page = event;
        this.loading = true;
        this.getData();
    }
    limitChange(event) {
        this.limit = event;
        this.loading = true;
        this.getData();
    }
    itemClikc(event) {
        if (this.detail !== 'nodetail') {
            this.router.navigate(['/detail'], { queryParams: { pid: this.pid, id: event.id } });
        }
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
    })
], ListComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils.service */ "./src/app/service/utils/utils.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./src/app/config/index.ts");







let HttpService = class HttpService {
    constructor(http, utils) {
        this.http = http;
        this.utils = utils;
        this.host = _config__WEBPACK_IMPORTED_MODULE_6__["default"].host;
    }
    /**
     * get 请求
     * @param url 请求参数
     */
    get(param, option) {
        const options = Object.assign({ params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: param.data ? param.data : {} }) }, option);
        let url = `${this.host}${param.url}`;
        if (param.host) {
            url = `${param.host}${param.url}`;
        }
        return this.http
            .get(url, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /**
     * post 请求
     * @param url 请求地址
     * @param data 参数
     */
    post(param, option) {
        let url = `${this.host}${param.url}`;
        if (param.host) {
            url = `${param.host}${param.url}`;
        }
        return this.http
            .post(url, param.data, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /**
     * put 请求
     * @param url 请求地址
     * @param data 参数
     */
    put(param, option) {
        let url = `${this.host}${param.url}`;
        if (param.host) {
            url = `${param.host}${param.url}`;
        }
        return this.http
            .put(url, param.data, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /**
     * delete 请求
     * @param url 请求地址
     */
    delete(param, option) {
        let url = `${this.host}${param.url}`;
        if (param.host) {
            url = `${param.host}${param.url}`;
        }
        return this.http
            .delete(url, option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.handleResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    /**
     * 成功结果
     * @param res 结果
     */
    handleResult(res, utils) {
        const body = res;
        return body || {};
    }
    /**
     * 错误结果
     * @param error 错误信息
     */
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // 发生客户端或网络错误。相应处理
            console.error('发生错误:', error.error.message);
        }
        else {
            // 后端返回了不成功的响应代码。
            // 反应体可能包含了什么地方出了问题的线索，
            console.error(`后端返回代码: ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // 返回带有面向用户的错误消息的可观测数据
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('发生了不好的事情，请稍后再试。');
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _utils_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], HttpService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.service */ "./src/app/service/utils/utils.service.ts");





let InterceptorService = class InterceptorService {
    constructor(log) {
        this.log = log;
    }
    intercept(req, next) {
        const started = Date.now();
        let ok;
        let authReq;
        authReq = req.clone({
            setHeaders: {}
        });
        return next.handle(authReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"] ? '成功' : '', error => ok = '失败'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
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
    }
};
InterceptorService.ctorParameters = () => [
    { type: _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilsService"] }
];
InterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterceptorService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilsService = class UtilsService {
    constructor() {
    }
};
UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilsService);



/***/ }),

/***/ "./src/app/video/video.component.scss":
/*!********************************************!*\
  !*** ./src/app/video/video.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bee-list {\n  width: 100%;\n  height: calc(100vh - var(--bee-header-height));\n  margin-top: var(--bee-header-height);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.bee-list-logo {\n  width: 100%;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n  overflow: hidden;\n}\n.bee-list-logo img {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n}\n.bee-list-content {\n  flex: 1;\n  width: var(--bee-body-width);\n  margin: var(--bee-margin) auto;\n  padding: calc(var(--bee-padding) / 2);\n  overflow: hidden;\n  background-color: white;\n}\n.bee-list-content .content {\n  display: flex;\n  flex-wrap: wrap;\n  overflow: hidden;\n}\n.bee-list-content .content .list-item {\n  flex-basis: calc(25% - 16px);\n  margin: 8px;\n}\n.bee-list-content .list-page {\n  display: flex;\n  justify-content: center;\n  padding: calc(var(--bee-padding) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vRDpcXHByb2plY3RcXG15IHByb2plY3RcXGFuZ3VsYXIgcGMgcHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFx2aWRlb1xcdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLDhDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRFo7QURLSTtFQUNJLE9BQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUNBekJFO0VBMEJGLGdCQUFBO0VBQ0EsdUJBQUE7QUNIUjtBREtRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0haO0FES1k7RUFDSSw0QkFBQTtFQUNBLFdBQUE7QUNIaEI7QURPUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG5cclxuLmJlZS1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpKTtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLWJlZS1oZWFkZXItaGVpZ2h0KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICAgJi1sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLWJlZS1ib2R5LXdpZHRoKTtcclxuICAgICAgICBtYXJnaW46IHZhcigtLWJlZS1tYXJnaW4pIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogJHBhZGRpbmc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMjUlIC0gMTZweCk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3QtcGFnZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWJlZS1wYWRkaW5nKSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIuYmVlLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpKTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tYmVlLWhlYWRlci1oZWlnaHQpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uYmVlLWxpc3QtbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJlZS1saXN0LWxvZ28gaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmVlLWxpc3QtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiB2YXIoLS1iZWUtYm9keS13aWR0aCk7XG4gIG1hcmdpbjogdmFyKC0tYmVlLW1hcmdpbikgYXV0bztcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYmVlLWxpc3QtY29udGVudCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iZWUtbGlzdC1jb250ZW50IC5jb250ZW50IC5saXN0LWl0ZW0ge1xuICBmbGV4LWJhc2lzOiBjYWxjKDI1JSAtIDE2cHgpO1xuICBtYXJnaW46IDhweDtcbn1cbi5iZWUtbGlzdC1jb250ZW50IC5saXN0LXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1iZWUtcGFkZGluZykgLyAyKTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/app/config/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/http/http.service */ "./src/app/service/http/http.service.ts");





let VideoComponent = class VideoComponent {
    constructor(router, http, route) {
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
        this.route.queryParams.subscribe(res => {
            this.condition = res.id;
            this.pid = res.pid;
            this.type = res.type;
            this.detail = res.detail;
            this.parentLoading = false;
            this.getParent(res.pid);
            this.getData();
        });
    }
    ngOnInit() {
    }
    getParent(event) {
        const param = {
            url: `api.php/cms/sort/scode/${event}`
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.parentData = res.data;
                this.parentLoading = true;
            }
        });
    }
    getData() {
        this.data = [];
        const param = {
            url: `api.php/list/${this.condition}/page/${this.page}/num/${this.limit}`,
            data: {}
        };
        this.http.get(param).subscribe(res => {
            if (res.code === 1) {
                this.data = res.data;
                this.total = res.rowtotal;
            }
            this.loading = false;
        });
    }
    pageChange(event) {
        this.page = event;
        this.loading = true;
        this.getData();
    }
    limitChange(event) {
        this.limit = event;
        this.loading = true;
        this.getData();
    }
    itemClikc(event) {
        this.playSelect = event.id;
    }
};
VideoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video',
        template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/video/video.component.html"),
        styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/video/video.component.scss")]
    })
], VideoComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\my project\angular pc project\museum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map