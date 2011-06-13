(function() {
	var g = null,
		h;
	try {
		if (!window.google) window.google = {};
		if (!google.doodle) google.doodle = {};
		
		var j, o, p, r, s, aa, t, u, ba, v, ca, da, ea = navigator.userAgent.indexOf("MSIE") >= 0,
			guitarStrings = [ // [note,baseColor,stringColor,stringThickness,[[startX,startY],[endX,endY]]
				[3, "#776a62", "#2063ff", 2, [
					[28, 23],
					[103, 23]
				]],
				[5, "#776a62", "#f61b33", 2, [
					[28, 38],
					[103, 38]
				]],
				[0, "#776a62", "#ffdd24", 2, [
					[65, 67],
					[318, 67]
				]],
				[2, "#776a62", "#07d238", 2, [
					[28, 81],
					[281, 81]
				]],
				[7, "#776a62", "#2063ff", 1, [
					[28, 96.5],
					[281, 96.5]
				]],
				[9, "#776a62", "#f61b33", 1, [
					[29, 111.5],
					[104, 111.5]
				]],
				[1, "#776a62", "#07d238", 2, [
					[358, 66],
					[433, 66]
				]],
				[4, "#776a62", "#2063ff", 2, [
					[358, 81],
					[433, 81]
				]],
				[6, "#776a62", "#f61b33", 2, [
					[330, 96],
					[405, 96]
				]],
				[8, "#776a62", "#ffdd24", 1, [
					[358, 111.5],
					[434, 111.5]
				]]
			],
			ga = 0,
			ha = 0,
			w = 0,
			x = 0,
			y = true,
			z = [],
			A = g,
			B = g,
			C = function(a) {
				if (a && a.parentNode)
                    a.parentNode.removeChild(a);
			},
			D = function(a, b, c) {
				if (a) {
					if (!google.doodle.ka)
                        google.doodle.ka = [];
					
                    google.doodle.ka.push(arguments);
					
                    if (a.addEventListener)
                        a.addEventListener(b, c, false);
                    else
                        a.attachEvent("on" + b, f);
				}
			},
			ia = function(a, b, c) {
				if (a) {
                    if (a.removeEventListener)
                        a.removeEventListener(b, c, false);
                    else
                        a.detachEvent("on" + b, c);
				}
			},
			ja = function() {
				if (google.doodle.ka) {
                    for (var a; a = google.doodle.ka.pop();)
                        ia.apply(g, a);
				}
			},
			E = function(a) {
				if (a) {
                    if (a.stopPropagation)
                        a.stopPropagation();
				}
                else
                    window.event.cancelBubble = true;
                
				return false;
			},
			F = function(a) {
				if (j !== a) {
					var b = j;
                    
					j = a;
					
                    for (a = 0; a < z.length; ++a)
                        z[a](b);
				}
			},
			G = 0;
		z.push(function() {
			var a = document.getElementById("hplogo-on");
            
			if (a) {
                if (j == 1) {
                    a.style.backgroundPosition = "-476px -139px";
                    G = 0;
                }
                else {
                    if (j == 2)
                        G = 1;
                    else {
                        a.style.backgroundPosition = "-2000px -2000px";
                        G = 0;
                    }
                }
			}
		});
		var ka = function(a) {
				if (j === 0 || j == 5 || j == 4)
                    F(1);
                else
                    F(4);
				
                return E(a);
			},
			H = g,
			ma = function(a) {
				C(document.getElementById("goo-gl-script"));
                
				if (H)
                    window.clearTimeout(H);
                
				var b = "http://google-lespaul.appspot.com?callback=google.doodle.url&url=" + encodeURIComponent(a),
					c = document.createElement("script");
                
				c.src = b;
                
				c.id = "goo-gl-script";
                
				H = window.setTimeout(function() {
					la(a);
				}, 2E3);
                
				document.body.appendChild(c);
			},
			na = function(a) {
				if (a && a.status == "OK" && !a.error && a.id)
                    la(a.id);
			},
			la = function(a) {
				if (j === 0 || j == 4) {
					window.clearTimeout(H);
                    
					var b = document.getElementById("hplogo-lcd-text");
                    
					if (b) {
                        b.value = a;
                        b.select();
				    }
				}
			},
			I = [
				[0, 0, 0, 0, 0, 0],
				[-540, -162, 9, 9, 59, 139],
				[-551, -162, 9, 6, 62, 139],
				[-559, -162, 11, 17, 55, 138]
			],
			J = function(a) {
				var b = document.getElementById("hplogo-lcd-screen");
                
				if (b)
                    b.style.backgroundPosition = "-678px -139px";
                    
				if (b = document.getElementById("hplogo-lcd-icon")) {
                    b.style.backgroundPosition = I[a][0] + "px " + I[a][1] + "px";
                    b.style.height = I[a][2] + "px";
                    b.style.width = I[a][3] + "px";
                    b.style.left = I[a][4] + "px";
                    b.style.top = I[a][5] + "px";
			    }
			};
		z.push(function(a) {
			var b = document.getElementById("hplogo-lcd-text");
            
			if (j == 5) {
				if (J(1) && b.value === "")
					b.value = "Playing...";
			}
			else if (A && (j === 0 || j == 4)) {
				if (J(2) && K() && b.value == "Playing...")
					b.value = "";
			}
			else if (j == 1) {
				J(3);
                b.value = "Recording";
			}
			
			if (j != 2 && (a == 1 || a == 2) && A) {
				A.stop();
                K();
                
                J((A.u.length === 0) ? 0 : 2);
                
                b.value = "";
                B = g;
                
                if (a = A.eb())
                    ma(a);
			}
		});
		var oa = function(a) {
				if (A && (j === 0 || j == 4)) {
                    F(5);
                    A.play();
                }
                else if(j == 5)
                    F(4);
				
                return E(a);
			};
		z.push(function() {
			if (j !== 0) try {
				document.getElementById("hplogo-i").focus();
			} catch (a) {}
		});
		z.push(function() {
			if (j == 1) {
                A = new L();
                B = A.ib();
			}
		});
		var pa = false,
			qa = {
				el: 1,
				iw: 1,
				ja: 1,
				kk: 1,
				ky: 1,
				ko: 1,
				lt: 1,
				lv: 1,
				mk: 1,
				mr: 1,
				ru: 1,
				th: 1,
				ur: 1,
				"zh-CN": 1,
				"zh-TW": 1
			},
			ra = function() {
				if (!pa && !qa[google.kHL]) {
					pa = true;
                    
					window.WebFontConfig = {
						google: {
							families: ["VT323"]
						}
					};
                    
					var a = document.createElement("script");
					a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
					a.type = "text/javascript";
					a.async = "true";
					document.body.appendChild(a);
				}
			},
			sa = false,
			N = g,
			ua = function() {
				O();
				N = window.setTimeout(function() {
					ta(true);
				}, 1E3);
			},
			O = function() {
				if (N)
                    window.clearTimeout(N);
                
				N = g;
				ta(false);
			},
			ta = function(a) {
				var b = document.getElementById("hplogot");
				if (b) {
                    if (sa) {
                        b.style.display = "block";
                        b.style.opacity = a ? 1 : 0;
                    }
                    else
                        b.style.display = a ? "block" : "none";
				}
			},
			za = function() {
				D(document, "keydown", va);
				D(document, "mousemove", P);
				D(document, "touchmove", P);
				D(document, "touchstart", wa);
				
                D(window, "resize", xa);
				D(document.body, "mouseout", ya);
				
                if (a = document.getElementById("hplogo-on")) {
                    a.onclick = ka;
                    a.style.cursor = "pointer";
				}
                
				if (a = document.getElementById("hplogo-led")) {
                    a.onclick = ka;
                    a.style.cursor = "pointer";
				}
                
				if (a = document.getElementById("hplogo-lcd-icon"))
                    a.onclick = oa;
                
				if ((a = document.getElementById("hplogo-click")) && !ea) {
                    a.onmousemove = ua;
                    a.onmouseout = O;
				}
			},
			wa = function(a) {
				var b = Aa(a);
                
				if (b[0] >= w && b[0] <= w + 474 && b[1] >= x && b[1] <= x + 175)
                    a.preventDefault();
			},
			Aa = function(a) {
				a = a || window.event;
				return [(a.clientX || a.targetTouches && a.targetTouches[0].clientX || 0) + (document.body.scrollLeft || document.documentElement.scrollLeft), (a.clientY || a.targetTouches && a.targetTouches[0].clientY || 0) + (document.body.scrollTop || document.documentElement.scrollTop)];
			},
			P = function(a) {
				a = a || window.event;
				a = Aa(a);
				ga = a[0];
				ha = a[1];
			},
			keyBindings = { // ASCII code: guitarString
				49: 2,
				50: 6,
				51: 3,
				52: 0,
				53: 7,
				54: 1,
				55: 8,
				56: 4,
				57: 9,
				48: 5,
				81: 2,
				87: 6,
				69: 3,
				82: 0,
				84: 7,
				89: 1,
				85: 8,
				73: 4,
				79: 9,
				80: 5,
				65: 2,
				83: 6,
				68: 3,
				70: 0,
				71: 7,
				72: 1,
				74: 8,
				75: 4,
				76: 9,
				186: 5,
				90: 2,
				88: 6,
				67: 3,
				86: 0,
				66: 7,
				78: 1,
				77: 8,
				188: 4,
				190: 9,
				191: 5
			},
			va = function(a) {
				var b = a || window.event;
                if (o && !b.altKey && !b.ctrlKey && !b.metaKey) {
                    b = keyBindings[b.keyCode];
                    
                    if (typeof b == "number") {
                        if (j === 0)
                            F(4);
                        
                        o.V(b);
                        E(a);
                    }
                    else
                        return true;
                }
                else
                    return false;
			},
			xa = function() {
				if (y && p != g) {
                    y = false;
                    
                    window.setTimeout(function() {
                        y = true;
                        
                        var a = p,
                            b = 0;
                            
                        do {
                            b += a.offsetLeft;
                        }
                        while (a = a.offsetParent);
                        
                        w = b;
                        a = p;
                        b = 0;
                        
                        do {
                            b += a.offsetTop;
                        }
                        while (a = a.offsetParent);
                        
                        x = b;
                    }, 30);
				}
			},
			ya = function(a) {
				a = a || window.event;
                
                if (a && !a.toElement)
                    P(a);
			},
			Ca = function(a, b) {
				this.i = a;
				this.Y = b;
				this.width = 474;
				this.height = 175;
				this.J = [];
				this.Ja = this.U = false;
				this.ha = 0;
				this.ta = this.T();
				this.ua = this.ia();
				this.qa = new Q(0, 0);
				this.ra = new Q(0, 0);
				this.Ia = true;
				this.La = (new Date()).getTime();
				this.Xa();
				this.Ka();
			};
		h = Ca.prototype;
		h.Xa = function() {
			for (var a = 0, b; b = guitarStrings[a++];)
                this.J.push(new Da(b[4][0][0], b[4][0][1], b[4][1][0], b[4][1][1], b[3], b[1], b[2], a, b[0], this.i, this.Y, this));
		};
		h.T = function() {
			return ga - w;
		};
		h.ia = function() {
			return ha - x;
		};
		h.Ha = function(a) {
			return R(a, this.width) / this.width;
		};
		h.kb = function() {
			this.bb();
			
            if (this.Ja)
                this.ab();
			
            if (this.U) {
                if (this.i)
                    this.i.clearRect(0, 0, this.width, this.height);
                
                this.Ka();
            }
		};
		h.Ka = function() {
			for (var a = 0, b; b = this.J[a++];) {
                b.hb();
                b.gb();
			}
		};
		h.ya = function() {
			if (this.J) {
                for (var a = 0, b; b = this.J[a++];)
                    b.ya();
			}
		};
		h.Va = function() {
			for (var a = 0, b; b = this.J[a++];) {
                if (b.L || b.O) {
				    this.U = true;
				    return;
			    }
			}
            
			this.U = false;
		};
		h.bb = function() {
			var timeNow = (new Date()).getTime(),
				b = (timeNow - this.La) / 1E3;
            
			this.La = timeNow;
            
			var a = this.T(),
				c = this.ia();
            
			this.qa.x = this.ta;
			this.qa.y = this.ua;
			this.ra.x = a;
			this.ra.y = c;
            
			var d = a - this.ta,
				e = c - this.ua;
            
			d = Math.sqrt(d * d + e * e);
            
			this.Ja = d > 0;
			this.ha = (this.ha * 4 + R(((b > 0 ? d / b : 0) - 70) / 1430, 1)) / 5;
			this.ta = a;
			this.ua = c;
		};
		h.ab = function() {
			if (this.Ia)
                this.Ia = false;
			else {
                for (var a = 0, b; b = this.J[a++];) {
                    var c;
                    c = this.qa;
                    var d = this.ra,
                        e = b.Ra,
                        f = b.Qa,
                        i = d.y - c.y,
                        n = f.y - e.y,
                        k = c.x - d.x,
                        l = e.x - f.x,
                        q = d.x * c.y - c.x * d.y,
                        M = f.x * e.y - e.x * f.y,
                        X = i * l - n * k;
                    
                    if (X === 0)
                        c = g;
                    else {
                        k = (k * M - l * q) / X;
                        i = (n * q - i * M) / X;
                        c = Math.pow(k - d.x, 2) + Math.pow(i - d.y, 2) > Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2) || Math.pow(k - c.x, 2) + Math.pow(i - c.y, 2) > Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2) || Math.pow(k - f.x, 2) + Math.pow(i - f.y, 2) > Math.pow(e.x - f.x, 2) + Math.pow(e.y - f.y, 2) || Math.pow(k - e.x, 2) + Math.pow(i - e.y, 2) > Math.pow(e.x - f.x, 2) + Math.pow(e.y - f.y, 2) ? g : new Q(k, i);
                    }
                    c && !b.L && (this.ha < 0.4 ? b.Ya(c.x, c.y) : b.Ma(c.x, c.y, false))
                }
			}
		};
		h.V = function(a) {
			if (a >= 0 && a < 12)
                this.J[a].V();
		};
		var R = function(a, b) {
                if (a < 0)
                    return 0;
                else {
                    if (a > b)
                        return b;
                    else
                        return a;
                }
			},
			Ea = function(a) {
				for (var b = [], a = a.match(/[0-9a-f]{2}/gi), c = 0, d; d = a[c++];)
                    b.push(parseInt(d, 16));
				return b;
			},
			Q = function(a, b) {
				this.x = a;
				this.y = b;
			},
			Da = function(a, b, c, d, e, f, i, n, k, l, q, M) {
				this.z = a;
				this.A = b;
				this.ea = c;
				this.fa = d;
				this.Ra = new Q(this.z, this.A);
				this.Qa = new Q(this.ea, this.fa);
				this.R = this.ea - this.z;
				this.S = this.fa - this.A;
				this.length = Math.sqrt(this.R * this.R + this.S * this.S);
				this.P = this.z + this.R * 0.5;
				this.Q = this.A + this.S * 0.5;
				this.W = this.P;
				this.X = this.Q;
				this.Aa = this.za = this.I = this.H = 0;
				this.ga = k;
				this.Da = this.ga / 11;
				this.Ca = this.M = this.F = this.la = 0;
				this.ca = Math.atan2(this.S, this.R);
				this.ba = Math.sin(this.ca);
				this.ma = Math.cos(this.ca);
				a = Math.PI / 2 - this.ca;
				this.Pa = Math.sin(a);
				this.Oa = Math.cos(a);
				this.index = n;
				this.lineWidth = e;
				this.na = f;
				this.Ba = i;
				this.aa = this.na;
				this.color = this.w;
				this.w = Ea(this.na);
				this.da = Ea(this.Ba);
				this.B = this.k = 0;
				this.Z = this.O = this.L = false;
				this.oa = 1;
				this.i = l;
				this.Y = q;
				this.v = M;
				this.o = (e = this.length > 100) ? 7.5 : 5;
				this.Sa = 0.88 + (0.85 - 0.88) * this.Da;
				this.Ta = 1.4 + 1.5 * this.Da;
				this.$ = 0;
                
				if (!this.i) {
                    this.G = document.createElement("div");
                    this.G.className = "hplogo-str";
                    this.G.style.left = this.z + 1 + "px";
                    this.G.style.top = this.A - 10 + "px";
                    this.G.style.width = this.length;
                    this.Ua = e ? -475 : -730;
                    this.Y.appendChild(this.G);
				}
			};
		h = Da.prototype;
		h.ya = function() {
			if (this.G) {
                this.Y.removeChild(this.G);
                this.G = g;
			}
		};
		h.gb = function() {
			var a, b;
            
			if ((this.L || this.Z) && this.H && this.I) {
                a = this.H;
                b = this.I;
			}
            else {
                a = this.W;
                b = this.X;
            }
            
			var c = a - this.z,
				d = b - this.A,
				e = this.ea - a,
				f = this.fa - b;
            
			if (this.i) {
                this.i.beginPath();
                this.i.lineCap = "round";
                this.i.strokeStyle = this.aa;
                this.i.lineWidth = this.lineWidth;
                this.i.shadowOffsetX = 2;
                this.i.shadowOffsetY = 3;
                this.i.shadowBlur = 2;
                this.i.shadowColor = "rgba(0, 0, 0, 0.35)";
                c = Math.sqrt(c * c + d * d);
                f = Math.sqrt(e * e + f * f);
                e = 0.45 * c * this.ma;
                c = 0.45 * c * this.ba;
                d = 0.45 * f * this.ma;
                f = 0.45 * f * this.ba;
                this.i.moveTo(this.z, this.A);
                this.i.bezierCurveTo(a - e, b - c, a + d, b + f, this.ea, this.fa);
                this.i.stroke();
                this.i.closePath();
			}
            else {
                this.G.style.backgroundPosition = this.Ua + "px " + -(3 + Math.round(d / 2)) * 20 + "px";
			}
		};
		h.hb = function() {
			if (this.L)
                this.Na();
            else if (this.O)
                this.db();
		};
		h.db = function() {
			if (this.Z) {
				this.aa = this.Ba;
				var a = this.za - this.H,
					b = this.Aa - this.I;
				this.H += a * 0.8;
				this.I += b * 0.8;
				if (Math.abs(a) < 2 && Math.abs(b) < 2) {
                    this.$ = 0;
                    this.oa = 1;
                    this.Z = false;
                    if ((a >= 0 ? 1 : -1) != (this.ba >= 0 ? 1 : -1))
                        (this.oa *= -1);
				}
			}
            else {
                this.color = [this.w[0] + (this.da[0] - this.w[0]) * (this.k > this.o * 0.25 ? 1 : this.k / (this.o * 0.25)), this.w[1] + (this.da[1] - this.w[1]) * (this.k > this.o * 0.25 ? 1 : this.k / (this.o * 0.25)), this.w[2] + (this.da[2] - this.w[2]) * (this.k > this.o * 0.25 ? 1 : this.k / (this.o * 0.25)), this.w[3] + (this.da[3] - this.w[3]) * (this.k > this.o * 0.25 ? 1 : this.k / (this.o * 0.25))];
                this.aa = "rgb(" + Math.round(this.color[0]) + "," + Math.round(this.color[1]) + "," + Math.round(this.color[2]) + ")";
                this.$ += this.Ta * this.oa;
                this.a = Math.sin(this.$);
                this.k *= this.Sa;
                this.W = this.P + this.a * this.ba * this.k;
                this.X = this.Q - this.a * this.ma * this.k;
                
                if (this.color && this.aa && this.$ && this.a && this.k && this.W && this.X && this.k <= 0.15) {
                    this.k = 0;
                    this.O = false;
                    this.color = this.w;
                    this.aa = this.na;
                    this.v.Va();
                }
            }
		};
		h.Na = function() {
			var a = this.v.T(),
				b = this.v.ia(),
				c = a - this.z,
				d = b - this.A,
				e = this.ca - Math.atan2(d, c);
            
			c = Math.sqrt(c * c + d * d);
            
			this.F = c * Math.sin(e);
			this.Ea(R(c * Math.cos(e) / this.length, 1));
			this.B = R(Math.abs(this.F) / this.o, 1);
			if (Math.abs(this.F) > this.la)
                this.Wa();
            else {
                this.H = a;
                this.I = b;
            }
		};
		h.Ea = function(a) {
			this.M = a;
			this.Ca = this.M <= 0.5 ? this.M / 0.5 : 1 - (this.M - 0.5) / 0.5;
			this.la = this.o * this.Ca;
		};
		h.Ma = function(a, b, c) {
			this.H = a;
			this.I = b;
			b = this.v.T() - this.z;
            
			var d = this.v.ia() - this.A;
            
			this.Ea(R(Math.sqrt(b * b + d * d) / this.length, 1));
			this.F = (1 - (c ? 1 : this.v.ha)) * this.la;
			this.B = c ? 1 : R(Math.abs(this.F) / this.o, 1);
			if (this.F < 3) this.F = 3;
			this.H += this.F * this.Oa;
			this.I += this.F * this.Pa;
			this.W = this.P;
			this.X = this.Q;
			if (this.O) {
                this.B = R(this.B / 2 + this.k / this.o, 1);
                this.k = this.B * this.o;
			}
            else {
                this.k = this.B * this.o;
                this.Ga();
            }
			this.Fa(this.B, this.v.Ha(a));
		};
		h.V = function() {
			this.Ma(this.P, this.Q, true);
		};
		h.Ya = function(a, b) {
			this.L = true;
			this.v.U = true;
			this.H = a;
			this.I = b;
			this.Na();
		};
		h.Wa = function() {
			this.L = false;
			this.W = this.P;
			this.X = this.Q;
			this.k = this.B * this.o;
			this.Fa(this.B, this.v.Ha(this.v.T()));
			this.Ga();
		};
		h.Ga = function() {
			this.v.U = true;
			this.za = this.z + this.M * this.R;
			this.Aa = this.A + this.M * this.S;
			this.$ = 0;
			this.Z = this.O = true;
		};
		h.Fa = function(a, b) {
			if (r) {
                try {
				    s.playTrack("guitar-" + (this.ga < 10 ? "0" : "") + this.ga, this.ga, 0.4 + (0.6 - 0.4) * a, -0.8 + 1.6 * b);
                } catch (c) {
                    r = false;
                }
			}
            
			if (B)
                B([this.index - 1]);
		};
		var Fa = function() {
				if (r) for (var a = 0; a < 12; a++) if (r) try {
					s.stopChannel(a);
				} catch (b) {
					r = false;
				}
			},
			Ha = function() {
				if (u)
                    Ga("guitar11-sound-player") || Ga("guitar11-sound-player-2");
			},
			Ga = function(a) {
                if (a = u.getElementById(a) && a.playTrack) {
                    s = a;
                    r = true;
                    Ia();
                    return true;
                }
                else
                    return false;
			},
			S = function(a, b) {
				if (a < b)
                    return -1;
				else if (a > b)
                    return 1;
				
                return 0;
			},
			T = function(a) {
				a = a.match(/[\d]+/g);
				a.length = 3;
				return a.join(".");
			},
			Ja = function() {
				var a = false,
					b = "";
				if (navigator.plugins && navigator.plugins.length) {
					var c = navigator.plugins["Shockwave Flash"];
					if (c) {
                        a = true;
                        if (c.description)
                            b = T(c.description);
					}
					if (navigator.plugins["Shockwave Flash 2.0"]) {
                        a = true;
                        b = "2.0.0.11";
					}
				}
                else if (navigator.mimeTypes && navigator.mimeTypes.length) {
                    if (a = (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin)
                        b = T(c.enabledPlugin.description);
                }
				else {
                        try {
                            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                            a = true;
                            b = T(c.GetVariable("$version"))
                        } catch (d) {
                            try {
                                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                                a = true;
                                b = "6.0.21";
                            } catch (e) {
                                try {
                                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                                    a = true;
                                    b = T(c.GetVariable("$version"));
                                } catch (f) {}
                        }
                    }
				}
                
				aa = a;
				ba = b;
			},
			Ka = function() {
				for (var a = 0, b = String(ba).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), c = String("9.0.0.0").replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(b.length, c.length), e = 0; a == 0 && e < d; e++) {
					var f = b[e] || "",
						i = c[e] || "",
						n = RegExp("(\\d*)(\\D*)", "g"),
						k = RegExp("(\\d*)(\\D*)", "g");
                    
					do {
						var l = n.exec(f) || ["", "", ""],
							q = k.exec(i) || ["", "", ""];
                            
						if (l[0].length === 0 && q[0].length === 0)
                            break;
                        
						a = S(l[1].length === 0 ? 0 : parseInt(l[1], 10), q[1].length == 0 ? 0 : parseInt(q[1], 10)) || S(l[2].length == 0, q[2].length == 0) || S(l[2], q[2])
					}
                    while (a == 0)
				}
                
				return a >= 0;
			},
			U, La = {
				c: 2,
				d: 6,
				e: 3,
				f: 0,
				g: 7,
				a: 1,
				b: 8,
				C: 4,
				D: 9,
				E: 5,
				1: 2,
				2: 6,
				3: 3,
				4: 0,
				5: 7,
				6: 1,
				7: 8,
				8: 4,
				9: 9,
				0: 5
			},
			Ma = function(a, b) {
				if (!(typeof a != "number" || typeof b != "string")) {
					if (U !== void 0)
                        window.clearInterval(U);
                    
					var c = Math.floor(6E4 / a);
                    
					if (!(c < 30) && !(6E4 * (b.replace("[", "").replace("]", "").length / a) > 28E3)) {
						var d = 0;
						F(5);
						U = window.setInterval(function() {
							if (d >= b.length && j == 5)
                                F(4);
                            
							if (j != 5)
                                window.clearInterval(U);
							else {
								var a = b.charAt(d++);
								if (a != "-") {
									var c = [];
									if (a == "[") {
										for (; d < b.length && b.charAt(d) != "]";) c.push(b.charAt(d++));
										d++;
									}
                                    else
                                        c.push(a);
                                    
									for (var a = 0, i; i = c[a++];) {
                                        La.hasOwnProperty(i);
                                        o.V(La[i]);
									}
								}
							}
						}, c);
					}
				}
			},
			V = g,
			W = g,
			Na = function() {
				if (!V) {
					V = {};
					W = {};
					for (var a = 0; a < 65; a++) {
                        V[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_*".charAt(a);
                        W[V[a]] = a;
					}
				}
			},
			Y = function(a, b) {
				this.N = a;
				this.duration = Math.max(b, 0);
				var c = 0;
				c += this.N.length == 1 ? 5 : 11;
				c += this.duration < Math.pow(2, 5) ? 6 : 21;
				this.size = c;
			};
		Y.prototype.play = function() {
			for (var a = 0; a < this.N.length; ++a)
                o.V(this.N[a]);
		};
		var Z = function(a, b) {
				for (var c = [], d = 0; d < b; ++d) {
                    c.push( !! (a & 1));
                    a >>= 1;
                }
                
				return c;
			},
			Oa = function(a, b, c) {
				if (b + c > a.length)
                    return -1;
				for (var d = 0, e = 0; e < c; ++e) {
                    d *= 2;
                    d |= a[b + c - e - 1] ? 1 : 0;
				}
				
                return d;
			},
			Pa = function(a) {
				for (var b = [], c = 0; c < 10; ++c)
                    b.push(false);
                
				for (c = 0; c < a.length; ++c)
                    b[a[c]] = true;
				
                return b;
			};
		Y.prototype.xa = function() {
			var a = [];
			this.N.length == 1 ? (a.push(false), a = a.concat(Z(this.N[0], 4))) : (a.push(true), a = a.concat(Pa(this.N)));
			this.duration < Math.pow(2, 5) ? (a.push(false), a = a.concat(Z(this.duration, 5))) : (a.push(true), a = a.concat(Z(this.duration, 20)));
			return a
		};
		var Qa = function(a, b) {
				var c, d, e = b;
				if (b < 0 || b >= a.length) return g;
				if (a[b]) {
					c = b + 1;
					if (c + 10 > a.length) d = g;
					else {
						d = [];
						for (var f = 0; f < 10; ++f) a[c + f] && d.push(f)
					}
					if (!d) return g;
					b += 11
				} else {
					c = Oa(a, b + 1, 4);
					if (c == -1) return g;
					d = [c];
					b += 5
				}
				if (b >= a.length) return g;
				a[b] ? (c = Oa(a, b + 1, 20), b += 21) : (c = Oa(a, b + 1, 5), b += 6);
				return c < 0 ? g : {
					s: new Y(d, c),
					n: b - e
				}
			},
			L = function(a) {
				this.u = a || [];
				this.va = g;
				for (var b = this.duration = a = 0; b < this.u.length; ++b) a += this.u[b].size, b != 0 && (this.duration += this.u[b].duration * 50);
				this.size = a
			};
		L.prototype.Za = function(a) {
			this.u.push(a);
			this.size += a.size;
			this.u.size > 1 && (this.duration += a.duration * 50)
		};
		L.prototype.$a = function() {
			return (this.size + 4) * 1.37 / 8
		};
		var Ra = g,
			Sa = function() {
				if (j == 1)
                    F(2);
			},
			Ta = g,
			Ua = function() {
				if (j == 1 || j == 2)
                    F(4);
			};
		L.prototype.ib = function() {
			this.wa = 0;
			this.K = [];
			this.cb = true;
			var a = this;
			this.va = window.setTimeout(function() {
				a.tick(true);
			}, 50);
			return function(b) {
				a.K.push(b);
			}
		};
		L.prototype.tick = function(a) {
			this.wa++;
			if (this.K && this.K.length > 0) {
				var b = this.wa;
				this.wa = 0;
				var c;
				if (this.K.length == 1)
                    c = this.K[0];
				else {
					for (var d = [], e = 0; c = this.K[e++];) {
                        for (var f = 0; f < c.length; ++f)
                            d[c[f]] = 1;
					}
					c = [];
					for (e = 0; e < d.length; ++e) {
                        if (d[e])
                            c.push(e);
					}
				}
				this.K = [];
				this.Za(new Y(c, b));
				
                if (this.u.length == 1) {
                    window.clearTimeout(Ta);
                    Ta = window.setTimeout(Ua, 28E3);
                    window.clearTimeout(Ra);
                    Ra = window.setTimeout(Sa, 23E3);
                }
                
				b = this.$a();
                
				if (b >= 1900 || this.duration >= 28E3) {
					F(4);
					return;
				}
                else if (b >= 1800)
                    F(2);
			}
			if (a) {
				var i = this;
				this.va = window.setTimeout(function() {
					i.tick(true)
				}, 50)
			}
		};
		L.prototype.stop = function() {
			window.clearTimeout(this.va);
			this.tick(false);
			if (this.u.length > 0) this.u[0].duration = 0;
			this.cb = false;
		};
		L.prototype.play = function(a) {
			if (j == 5) {
                if (this.duration > 28E3 && j == 5 )
                    F(4);
			}
			else {
				var b = a || 0;
				b > 0 && this.u[b - 1].play();
				if (b >= this.u.length && j == 5)
                    F(4);
				else {
					var c = this;
					window.setTimeout(function() {
						c.play(b + 1);
					}, this.u[b].duration * 50);
				}
			}
		};
		eval("google.doodle.mod = (function(a,n){return a" + "%%".charAt(0) + "n;})");
		L.prototype.xa = function() {
			for (var a = [], b = 0; b < this.u.length; ++b)
                a = a.concat(this.u[b].xa());
            
			for (window.bits = a; google.doodle.mod(a.length, 8) != 0;)
                a.push(false);
            
			return a;
		};
		L.prototype.eb = function() {
			if (this.u.length == 0)
                return g;
            
			var a = "http://www.google.com/webhp?",
				b = Va(window.location.toString()).hl;
            
			if (b)
                a += "hl=" + b + "&";
			
            a += "tune=";
			
            for (var c = this.xa(), b = [], d = 0; d < c.length; d += 8) {
				for (var e = 0, f = 0; f < 8; ++f) {
                    e *= 2;
                    e |= c[d + f] ? 1 : 0;
				}
                
				b.push(e)
			}
			Na();
			c = V;
			d = [];
			for (e = 0; e < b.length; e += 3) {
				var i = b[e],
					n = (f = e + 1 < b.length) ? b[e + 1] : 0,
					k = e + 2 < b.length,
					l = k ? b[e + 2] : 0,
					q = i >> 2,
					i = (i & 3) * 16 | n >> 4,
					n = (n & 15) * 4 | l >> 6;
				l &= 63;
				k || (l = 64, f || (n = 64));
				d.push(c[q], c[i], c[n], c[l])
			}
			return a + d.join("");
		};
		var Va = function(a) {
				if (!a) return {};
				for (var a = a.match(/\?[^#]*/), a = (a && a.length > 0 ? a[0].substr(1) : "").split("&"), b = {}, c = 0; c < a.length; ++c) {
					var d = a[c];
					if (d) {
                        d = d.split("=");
                        b[d[0]] = d[1] || "";
					}
				}
				return b;
			},
			Ia = function() {
				var a = Va(window.location.href),
					b = parseInt(a.bpm, 10),
					a = a.tune;
				
                if (b && a)
                    Ma(b, unescape(a));
                
				if (a) {
					Na();
					for (var c = W, b = [], d = 0; d < a.length;) {
						var e = c[a.charAt(d++)],
							f = d < a.length ? c[a.charAt(d)] : 0;
						++d;
						var i = d < a.length ? c[a.charAt(d)] : 0;
						++d;
						var n = d < a.length ? c[a.charAt(d)] : 0;
						++d;
						
                        if (e == g || f == g || i == g || n == g) throw Error();
						
                        b.push(e * 4 | f >> 4);
						
                        if (i != 64) {
                            b.push(f * 16 & 240 | i >> 2);
                            if (n != 64)
                                b.push(i * 64 & 192 | n);
					    }
					}
					a = [];
					for (c = 0; c < b.length; ++c) {
						d = b[c];
						for (e = 0; e < 8; ++e) {
                            a.push( !! (d & 128));
                            d *= 2;
						}
					}
					if (a) {
						var k;
						a: {
							b = [];
							c = 0;
                            
							try {
								for (; a.length - c >= 8;) {
									var l = Qa(a, c);
                                    
									if (l) {
                                        b.push(l.s);
                                        c += l.n;
									}
									else {
										k = g;
										break a
									}
								}
							} catch (q) {
								k = g;
								break a
							}
                            
							k = new L(b);
						}
						
                        if (k) {
                            A = k;
                            F(5);
                            k.play();
                        }
					}
				}
			},
			Wa = true,
			Xa = function() {
				if (google.rein && google.dstr && !google.doodle.jb) {
                    google.doodle.jb = true;
                    google.rein.push(Xa);
                    google.dstr.push($);
				}
                
				if (document.getElementById("hplogo")) {
					$();
					google.psy && google.psy.q && google.msg && google.msg.listen(22, function() {
						$();
						return true
					});
					google.doodle.url = na;
					p = document.getElementById("hplogo-g");
					v = document.createElement("canvas");
					v.getContext ? (v.width = 474, v.height = 175, v.hideFocus = true, ca = v.getContext("2d"), p.appendChild(v)) : v = g;
					xa();
					o = new Ca(ca, p);
					var a;
					r = false;
					Ja();
                    
					if (!aa || !Ka())
                        a = false;
					else {
						google.doodle.flashLoaded = Ha;
						t = document.createElement("iframe");
						t.name = "doodle-sound";
						t.style.position = "absolute";
						t.style.top = "-150px";
						t.style.border = 0;
						t.style.width = "100px";
						t.style.height = "100px";
						document.getElementById("hplogo").appendChild(t);
						
                        u = t.contentDocument;
						
                        if (u == void 0 || u == g)
                            u = t.contentWindow.document;
						
                        u.open();
                        
                        slashPos = location.href.lastIndexOf('/');
                        relPath = location.href.substr(0, slashPos);
                        relPath += "/src/";
						
                        u.write("<html><head></head><body><object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0\" width=\"0\" height=\"0\" id=\"guitar11-sound-player\" type=\"application/x-shockwave-flash\"><param name=\"movie\" value=\"");
                        u.write(relPath + "guitar11.swf\"><param name=\"allowScriptAccess\" value=\"always\"><object id=\"guitar11-sound-player-2\" type=\"application/x-shockwave-flash\" data=\"" + relPath + "guitar11.swf\" width=\"0\" height=\"0\"><param name=\"allowScriptAccess\" value=\"always\"></object></object></body></html>");
						
                        u.close();
						a = true;
					}
					
					if (b = document.getElementById("hplogot"))
                        sa = typeof b.style.opacity != "undefined";
					
					za();
					
                    Ya();
					
                    if (!a && Wa)
                        Ia();
					
                    Wa = false;
					
                    ra();
                    
					if (ea) {
                        try {
						    document.execCommand("BackgroundImageCache", false, true)
					    } catch (c) {}
					}
				}
			},
			Ya = function() {
				if (o) {
                    o.kb();
                    da = window.setTimeout(Ya, 30);
				}
                
				var a = document.getElementById("hplogo-led");
                
				if (a && G) {
                    a.style.backgroundPosition = -540 - 23 * Math.abs(Math.round(5 * Math.sin(G * Math.PI / 12))) + "px -139px";
                    G++;
				}
			},
			K = function() {
				if (a = document.getElementById("hplogo-led"))
                    a.style.backgroundPosition = "1000px 1000px";
			},
			$ = function() {
				try {
					window.clearTimeout(da);
					O();
					Fa();
					ja();
					o && (o.ya(), o = g);
					t && (C(t), t = g, r = false);
					v && (C(v), v = g);
					A && A.stop();
					B = A = g;
					F(0);
					var a = document.getElementById("hplogo-lcd-text");
					if (a) a.value = "";
					var b = document.getElementById("hplogo-lcd-screen");
					if (b) b.style.backgroundPosition = "1000px 1000px";
					K();
					google.msg && window.setTimeout(function() {
						google.msg.unlisten(22, $)
					}, 0)
				} catch (c) {}
			};
		google.doodle.cpDestroy = $;
		google.doodle.go = function() {
			window.location.href = "http://www.google.com/search?q=Les+Paul&ct=lespaul11-hp&oi=ddle";
		};
		google.x ? google.x("DOODLE", Xa) : Xa();
	} catch (Za) {
		google.ml(Za, false, {
			cause: "DOODLE"
		})
	};
})();
