// Compiled by ClojureScript 1.9.473 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9828_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9828_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9833 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9834 = null;
var count__9835 = (0);
var i__9836 = (0);
while(true){
if((i__9836 < count__9835)){
var s = cljs.core._nth.call(null,chunk__9834,i__9836);
var temp__4657__auto___9837 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9837)){
var sheet_9838 = temp__4657__auto___9837;
var temp__4657__auto___9839__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9838.href,changed);
if(cljs.core.truth_(temp__4657__auto___9839__$1)){
var href_uri_9840 = temp__4657__auto___9839__$1;
sheet_9838.ownerNode.href = href_uri_9840.makeUnique().toString();
} else {
}
} else {
}

var G__9841 = seq__9833;
var G__9842 = chunk__9834;
var G__9843 = count__9835;
var G__9844 = (i__9836 + (1));
seq__9833 = G__9841;
chunk__9834 = G__9842;
count__9835 = G__9843;
i__9836 = G__9844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9833);
if(temp__4657__auto__){
var seq__9833__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9833__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__9833__$1);
var G__9845 = cljs.core.chunk_rest.call(null,seq__9833__$1);
var G__9846 = c__7932__auto__;
var G__9847 = cljs.core.count.call(null,c__7932__auto__);
var G__9848 = (0);
seq__9833 = G__9845;
chunk__9834 = G__9846;
count__9835 = G__9847;
i__9836 = G__9848;
continue;
} else {
var s = cljs.core.first.call(null,seq__9833__$1);
var temp__4657__auto___9849__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___9849__$1)){
var sheet_9850 = temp__4657__auto___9849__$1;
var temp__4657__auto___9851__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_9850.href,changed);
if(cljs.core.truth_(temp__4657__auto___9851__$2)){
var href_uri_9852 = temp__4657__auto___9851__$2;
sheet_9850.ownerNode.href = href_uri_9852.makeUnique().toString();
} else {
}
} else {
}

var G__9853 = cljs.core.next.call(null,seq__9833__$1);
var G__9854 = null;
var G__9855 = (0);
var G__9856 = (0);
seq__9833 = G__9853;
chunk__9834 = G__9854;
count__9835 = G__9855;
i__9836 = G__9856;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9861 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9862 = null;
var count__9863 = (0);
var i__9864 = (0);
while(true){
if((i__9864 < count__9863)){
var s = cljs.core._nth.call(null,chunk__9862,i__9864);
var temp__4657__auto___9865 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9865)){
var image_9866 = temp__4657__auto___9865;
var temp__4657__auto___9867__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_9866.src,changed);
if(cljs.core.truth_(temp__4657__auto___9867__$1)){
var href_uri_9868 = temp__4657__auto___9867__$1;
image_9866.src = href_uri_9868.makeUnique().toString();
} else {
}
} else {
}

var G__9869 = seq__9861;
var G__9870 = chunk__9862;
var G__9871 = count__9863;
var G__9872 = (i__9864 + (1));
seq__9861 = G__9869;
chunk__9862 = G__9870;
count__9863 = G__9871;
i__9864 = G__9872;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9861);
if(temp__4657__auto__){
var seq__9861__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9861__$1)){
var c__7932__auto__ = cljs.core.chunk_first.call(null,seq__9861__$1);
var G__9873 = cljs.core.chunk_rest.call(null,seq__9861__$1);
var G__9874 = c__7932__auto__;
var G__9875 = cljs.core.count.call(null,c__7932__auto__);
var G__9876 = (0);
seq__9861 = G__9873;
chunk__9862 = G__9874;
count__9863 = G__9875;
i__9864 = G__9876;
continue;
} else {
var s = cljs.core.first.call(null,seq__9861__$1);
var temp__4657__auto___9877__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___9877__$1)){
var image_9878 = temp__4657__auto___9877__$1;
var temp__4657__auto___9879__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_9878.src,changed);
if(cljs.core.truth_(temp__4657__auto___9879__$2)){
var href_uri_9880 = temp__4657__auto___9879__$2;
image_9878.src = href_uri_9880.makeUnique().toString();
} else {
}
} else {
}

var G__9881 = cljs.core.next.call(null,seq__9861__$1);
var G__9882 = null;
var G__9883 = (0);
var G__9884 = (0);
seq__9861 = G__9881;
chunk__9862 = G__9882;
count__9863 = G__9883;
i__9864 = G__9884;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9887){
var map__9890 = p__9887;
var map__9890__$1 = ((((!((map__9890 == null)))?((((map__9890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9890):map__9890);
var on_jsload = cljs.core.get.call(null,map__9890__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9890,map__9890__$1,on_jsload){
return (function (p1__9885_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9885_SHARP_,".js");
});})(map__9890,map__9890__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9890,map__9890__$1,on_jsload){
return (function (p1__9886_SHARP_){
return goog.Uri.parse(p1__9886_SHARP_).makeUnique();
});})(js_files,map__9890,map__9890__$1,on_jsload))
,js_files)),({"cleanupWhenDone": true})).addCallbacks(((function (js_files,map__9890,map__9890__$1,on_jsload){
return (function() { 
var G__9892__delegate = function (_){
return on_jsload.call(null);
};
var G__9892 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9893__i = 0, G__9893__a = new Array(arguments.length -  0);
while (G__9893__i < G__9893__a.length) {G__9893__a[G__9893__i] = arguments[G__9893__i + 0]; ++G__9893__i;}
  _ = new cljs.core.IndexedSeq(G__9893__a,0);
} 
return G__9892__delegate.call(this,_);};
G__9892.cljs$lang$maxFixedArity = 0;
G__9892.cljs$lang$applyTo = (function (arglist__9894){
var _ = cljs.core.seq(arglist__9894);
return G__9892__delegate(_);
});
G__9892.cljs$core$IFn$_invoke$arity$variadic = G__9892__delegate;
return G__9892;
})()
;})(js_files,map__9890,map__9890__$1,on_jsload))
,((function (js_files,map__9890,map__9890__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9890,map__9890__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9899_9903 = cljs.core.seq.call(null,things_to_log);
var chunk__9900_9904 = null;
var count__9901_9905 = (0);
var i__9902_9906 = (0);
while(true){
if((i__9902_9906 < count__9901_9905)){
var t_9907 = cljs.core._nth.call(null,chunk__9900_9904,i__9902_9906);
console.log(t_9907);

var G__9908 = seq__9899_9903;
var G__9909 = chunk__9900_9904;
var G__9910 = count__9901_9905;
var G__9911 = (i__9902_9906 + (1));
seq__9899_9903 = G__9908;
chunk__9900_9904 = G__9909;
count__9901_9905 = G__9910;
i__9902_9906 = G__9911;
continue;
} else {
var temp__4657__auto___9912 = cljs.core.seq.call(null,seq__9899_9903);
if(temp__4657__auto___9912){
var seq__9899_9913__$1 = temp__4657__auto___9912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9899_9913__$1)){
var c__7932__auto___9914 = cljs.core.chunk_first.call(null,seq__9899_9913__$1);
var G__9915 = cljs.core.chunk_rest.call(null,seq__9899_9913__$1);
var G__9916 = c__7932__auto___9914;
var G__9917 = cljs.core.count.call(null,c__7932__auto___9914);
var G__9918 = (0);
seq__9899_9903 = G__9915;
chunk__9900_9904 = G__9916;
count__9901_9905 = G__9917;
i__9902_9906 = G__9918;
continue;
} else {
var t_9919 = cljs.core.first.call(null,seq__9899_9913__$1);
console.log(t_9919);

var G__9920 = cljs.core.next.call(null,seq__9899_9913__$1);
var G__9921 = null;
var G__9922 = (0);
var G__9923 = (0);
seq__9899_9903 = G__9920;
chunk__9900_9904 = G__9921;
count__9901_9905 = G__9922;
i__9902_9906 = G__9923;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9924_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9924_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__9930){
var map__9931 = p__9930;
var map__9931__$1 = ((((!((map__9931 == null)))?((((map__9931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9931):map__9931);
var canonical_path = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__9931__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__9933 = window;
var G__9933__$1 = (((G__9933 == null))?null:G__9933.location);
if((G__9933__$1 == null)){
return null;
} else {
return G__9933__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9934 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9934);

adzerk.boot_reload.reload.reload_css.call(null,G__9934);

adzerk.boot_reload.reload.reload_img.call(null,G__9934);

return G__9934;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map