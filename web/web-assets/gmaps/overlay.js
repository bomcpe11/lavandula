google.maps.__gjsload__('overlay', '\'use strict\';function fT(a){this.j=a}Q(fT,U);Ya(fT[K],function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&se(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.j:null))});function gT(){}function hT(){var a=this.gm_props_;if(this[jn]()){if(this[Mc]()){if(!a.Ug&&this.onAdd)this.onAdd();a.Ug=!0;this.draw()}}else{if(a.Ug)if(this[Xc])this[Xc]();else this[Eb]();a.Ug=!1}}function iT(a){a.gm_props_=a.gm_props_||new gT;return a.gm_props_}function jT(a){kj[L](this);this.ma=S(a,hT)}Q(jT,kj);function kT(){}\nkT[K].j=function(a){var b=a[fn](),c=iT(a),d=c.lc;c.lc=b;d&&(c=iT(a),(d=c.Fa)&&d[Km](),(d=c.nj)&&d[Km](),a[Km](),a.set("panes",null),a.set("projection",null),R(c.$,T[xb]),c.$=null,c.kf&&(c.kf.ma(),c.kf=null),yr("Ox","-p",a));if(b){c=iT(a);d=c.kf;d||(d=c.kf=new jT(a));R(c.$,T[xb]);var e=c.Fa=c.Fa||new Fq,f=b[C];e[p]("zoom",f);e[p]("offset",f);e[p]("center",f,"projectionCenterQ");e[p]("projection",b);e[p]("projectionTopLeft",f);e=c.nj=c.nj||new fT(e);e[p]("zoom",f);e[p]("offset",f);e[p]("projection",b);\ne[p]("projectionTopLeft",f);a[p]("projection",e,"outProjection");a[p]("panes",f);e=S(d,d.Y);c.$=[T[A](a,"panes_changed",e),T[A](f,"zoom_changed",e),T[A](f,"offset_changed",e),T[A](b,"projection_changed",e),T[A](f,"projectioncenterq_changed",e),T[v](b,"forceredraw",d)];d.Y();b instanceof Kg&&(vr(b,"Ox"),xr("Ox","-p",a))}};var lT=new kT;bh.overlay=function(a){eval(a)};Zf("overlay",lT);\n')