
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/level/l0.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 255;
		t.y = 800.96;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 800;
		t.y = 800.96;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 220;
		t.x = 0;
		t.y = 1303.03;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 200;
		t.y = 1303.03;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 444;
		t.x = 200;
		t.y = 803.03;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 663;
		t.y = 803.03;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 379;
		t.x = 663;
		t.y = 902.03;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 420;
		t.x = 300;
		t.y = 902.03;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 420;
		t.x = 300;
		t.y = 1303.03;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 700;
		t.y = 1303.03;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 803.03;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l1.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 136.33;
		t.y = 1000;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 709;
		t.y = 1000;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l10.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._StaticWoodStripPos1_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._WoodStripPos1_i(),this._IronBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 594.7;
		t.y = 1380;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 122.73;
		t.y = 1000;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 450;
		t.y = 1380;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 450;
		t.x = 270;
		t.y = 350;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 290.75;
		t.y = 370;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 666.75;
		t.y = 370;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._WoodStripPos1_i = function () {
		var t = new WoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.width = 480;
		t.x = 269.7;
		t.y = 980;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 409.7;
		t.y = 150;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 320;
		t.y = 1000;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 320;
		t.y = 1380;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 380;
		t.x = 700;
		t.y = 1380;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 1000;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l11.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._PlayerPos1_i(),this._StaticWoodStripPos1_i(),this._StaticWoodStripPos2_i(),this._IronBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 777.27;
		t.y = 1002.29;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 631.82;
		t.y = 1002.29;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 324.24;
		t.y = 600;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 300;
		t.x = 577.27;
		t.y = 480;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 300;
		t.x = 581.82;
		t.y = 223.24;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 627.27;
		t.y = 23.24;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 0;
		t.y = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 500;
		t.y = 600;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 500;
		t.y = 1002.29;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l12.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._WoodStripPos1_i(),this._StaticWoodStripPos1_i(),this._IronBallPos1_i(),this._IronBallPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 500;
		t.y = 1000;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 800;
		t.y = 600;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.width = 100;
		t.x = 90;
		t.y = 1001.64;
		return t;
	};
	_proto._WoodStripPos1_i = function () {
		var t = new WoodStripPos();
		t.height = 20;
		t.width = 450;
		t.x = 75;
		t.y = 240;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.rotation = 90;
		t.width = 340;
		t.x = 320;
		t.y = 260;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 90;
		t.y = 190;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 450;
		t.y = 190;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 0;
		t.y = 1001.64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 200;
		t.y = 1000;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 200;
		t.y = 600;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 400;
		t.y = 600;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 400;
		t.y = 1000;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 600;
		t.y = 1000;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 600;
		t.y = 600;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l13.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._BoomBoxPos3_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 144;
		t.y = 1198;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 1;
		t.height = 150;
		t.width = 150;
		t.x = 459;
		t.y = 1048;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 2;
		t.height = 150;
		t.width = 150;
		t.x = 589;
		t.y = 898;
		return t;
	};
	_proto._BoomBoxPos3_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 3;
		t.height = 150;
		t.width = 150;
		t.x = 721;
		t.y = 1048;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 814;
		t.y = 1048;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 515;
		t.y = 1048;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 662;
		t.y = 898;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1198;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l14.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._IronBallPos1_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 90;
		t.y = 1001.64;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 780.3;
		t.y = 1006.06;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 200;
		t.width = 200;
		t.x = 400;
		t.y = 400;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 200;
		t.y = 850;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 400;
		t.y = 1000;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 400;
		t.y = 600;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 600;
		t.y = 600;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 600;
		t.y = 1010;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l15.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._EnemyPos4_i(),this._BoomBoxPos1_i(),this._IronBallPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 655;
		t.y = 1060.37;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 132;
		t.y = 400;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 272.4;
		t.y = 1057.64;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 312.4;
		t.y = 1421.64;
		return t;
	};
	_proto._EnemyPos4_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 615;
		t.y = 1421.64;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.width = 132;
		t.x = 397.72;
		t.y = 1052.64;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 310;
		t.y = 300;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 410;
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 410;
		t.y = 400;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 330;
		t.x = 410;
		t.y = 820;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 620;
		t.x = 100;
		t.y = 820;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 730;
		t.x = 100;
		t.y = 1420;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 620;
		t.x = 810;
		t.y = 1420;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 250;
		t.x = 810;
		t.y = 820;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 420;
		t.x = 540;
		t.y = 820;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 360;
		t.x = 540;
		t.y = 400;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 133.03;
		t.x = 397.72;
		t.y = 1181.64;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.55;
		t.width = 180;
		t.x = 152.4;
		t.y = 1057.64;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.55;
		t.width = 180;
		t.x = 595;
		t.y = 1060.37;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l16.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._StaticThornPos1_i(),this._PlayerPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 450;
		t.y = 1001.64;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.rotation = 270;
		t.width = 335;
		t.x = 660;
		t.y = 989.14;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 133;
		t.y = 1001.64;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 700;
		t.x = 0;
		t.y = 1001.64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 700;
		t.y = 1001.64;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 601.64;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l17.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._ThornPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 800;
		t.y = 1000;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 100;
		t.y = 600;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 619;
		t.y = 1000;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.rotation = 90;
		t.width = 320;
		t.x = 480;
		t.y = 280;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 0;
		t.y = 600;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 500;
		t.y = 600;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 500;
		t.y = 1000;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l18.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","woodBox","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this.enemy1_i(),this.woodBox_i(),this._WoodStripPos1_i(),this._ThornPos1_i(),this._StaticThornPos1_i(),this._StaticThornPos2_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 500;
		t.y = 1200;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 100;
		t.y = 700;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 280;
		t.y = 600;
		return t;
	};
	_proto.woodBox_i = function () {
		var t = new WoodBoxPos();
		this.woodBox = t;
		t.height = 100;
		t.width = 100;
		t.x = 230;
		t.y = 600;
		return t;
	};
	_proto._WoodStripPos1_i = function () {
		var t = new WoodStripPos();
		t.height = 20;
		t.width = 400;
		t.x = 320;
		t.y = 194;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 180;
		t.width = 100;
		t.x = 570;
		t.y = 194;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.rotation = 90;
		t.width = 407;
		t.x = 340;
		t.y = 793;
		return t;
	};
	_proto._StaticThornPos2_i = function () {
		var t = new StaticThornPos();
		t.height = 40;
		t.rotation = 270;
		t.width = 407;
		t.x = 660;
		t.y = 1200;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 0;
		t.y = 700;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 300;
		t.y = 700;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 300;
		t.y = 1200;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 700;
		t.y = 1200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 700;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 50;
		t.x = 390.75;
		t.y = 214;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 50;
		t.x = 594.75;
		t.y = 214;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l19.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._IronBallPos1_i(),this._StaticWoodStripPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 99.33;
		t.y = 700;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 348;
		t.y = 1200;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 839;
		t.y = 577.06;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 570;
		t.y = 528;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = -90;
		t.width = 382;
		t.x = 550;
		t.y = 831;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 0;
		t.y = 703;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 520;
		t.x = 220;
		t.y = 700;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 274;
		t.x = 220;
		t.y = 1200;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 475;
		t.y = 1200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 51;
		t.x = 475;
		t.y = 780;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 71;
		t.x = 545;
		t.y = 780;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 50;
		t.x = 545;
		t.y = 831;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 51;
		t.x = 575;
		t.y = 831;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -45;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 287;
		t.x = 576;
		t.y = 780;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 779;
		t.y = 578;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l2.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._IronBoxPos1_i(),this._PlayerPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 650;
		t.y = 1479;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 280;
		t.y = 999;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 370;
		t.y = 849;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 84;
		t.y = 999;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 500;
		t.y = 1000;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 300;
		t.x = 500;
		t.y = 1479;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 480;
		t.x = 780;
		t.y = 1479;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 1000;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l20.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._BoomBoxPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 527;
		t.y = 1000;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 96;
		t.y = 1001.64;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 790.34;
		t.y = 1200;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 237.5;
		t.y = 900;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 370;
		t.y = 900;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 575;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 220;
		t.x = 575;
		t.y = 1000;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 323.33;
		t.x = 575;
		t.y = 1200;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l21.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["ironball","ironStrip","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this.ironball_i(),this.ironStrip_i(),this._StaticThornPos1_i(),this._StaticWoodStripPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 191;
		t.y = 486;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 424;
		t.y = 1043.64;
		return t;
	};
	_proto.ironball_i = function () {
		var t = new IronBallPos();
		this.ironball = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 642.34;
		t.y = 30;
		return t;
	};
	_proto.ironStrip_i = function () {
		var t = new IronStripPos();
		this.ironStrip = t;
		t.height = 20;
		t.width = 452;
		t.x = 377.02;
		t.y = 1025;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.rotation = 180;
		t.width = 425;
		t.x = 572.5;
		t.y = 636;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 420;
		t.x = 492.65;
		t.y = 230;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 556;
		t.x = 0;
		t.y = 486;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 80;
		t.x = 575;
		t.y = 486;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 525;
		t.x = 575;
		t.y = 586;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 480;
		t.x = 70;
		t.y = 586;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 489;
		t.x = 70;
		t.y = 1046;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 575;
		t.y = 1046;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 323.33;
		t.x = 574.01;
		t.y = 1425.97;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 535.32;
		t.y = 252;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l22.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["staticBoom","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._StaticThornPos1_i(),this._StaticThornPos2_i(),this._BoomBoxPos1_i(),this.staticBoom_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 800;
		t.y = 1229;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 181;
		t.y = 1129;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 260;
		t.y = 693;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 516;
		t.y = 798;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.rotation = 180;
		t.width = 267;
		t.x = 337;
		t.y = 349;
		return t;
	};
	_proto._StaticThornPos2_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.rotation = 270;
		t.width = 339;
		t.x = 850;
		t.y = 798;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 132;
		t.y = 1129;
		return t;
	};
	_proto.staticBoom_i = function () {
		var t = new BoomBoxPos();
		this.staticBoom = t;
		t.height = 100;
		t.width = 100;
		t.x = 210;
		t.y = 698;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 556;
		t.x = 0;
		t.y = 199;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 80;
		t.x = 575;
		t.y = 199;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 525;
		t.x = 575;
		t.y = 299;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 950;
		t.x = 70;
		t.y = 299;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 830;
		t.x = 70;
		t.y = 1229;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178;
		t.width = 650;
		t.x = 250;
		t.y = 800;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l23.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["spst","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._BoomBoxPos1_i(),this.spst_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 132;
		t.y = 459;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 534;
		t.y = 1276;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 310;
		t.y = 1276;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 616;
		t.y = 616;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 371.5;
		t.y = 1176;
		return t;
	};
	_proto.spst_i = function () {
		var t = new SpinIronStripPos();
		this.spst = t;
		t.height = 20;
		t.nailX = 210;
		t.nailY = -200;
		t.rotation = 90;
		t.width = 420;
		t.x = 696;
		t.y = 78;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 240;
		t.x = 0;
		t.y = 459;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 837;
		t.x = 260;
		t.y = 459;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 345;
		t.x = 260;
		t.y = 1276;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 640;
		t.x = 585;
		t.y = 1276;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 315;
		t.x = 585;
		t.y = 616;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l24.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e0","e2","e1","s2","s1","s0","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this.e0_i(),this.e2_i(),this.e1_i(),this._BoomBoxPos1_i(),this.s2_i(),this.s1_i(),this.s0_i(),this._StaticWoodStripPos1_i(),this._IronBallPos1_i(),this._StaticThornPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 179;
		t.y = 1276;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 694;
		t.y = 459;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 694;
		t.y = 926.5;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 694;
		t.y = 701;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 449;
		t.y = 826.5;
		return t;
	};
	_proto.s2_i = function () {
		var t = new StaticWoodStripPos();
		this.s2 = t;
		t.height = 20;
		t.width = 350;
		t.x = 420;
		t.y = 927;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.height = 20;
		t.width = 350;
		t.x = 420;
		t.y = 701;
		return t;
	};
	_proto.s0_i = function () {
		var t = new StaticWoodStripPos();
		this.s0 = t;
		t.height = 20;
		t.width = 350;
		t.x = 421.5;
		t.y = 459;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 350;
		t.x = 421.5;
		t.y = 200;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 450;
		t.y = 50;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 334;
		t.x = 436;
		t.y = 1233;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1093;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 651;
		t.x = 120;
		t.y = 1273;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1075;
		t.x = 771;
		t.y = 1293;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 131;
		t.x = 771;
		t.y = 200;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l25.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._StaticThornPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._BoomBoxPos3_i(),this.e1_i(),this._IronBallPos1_i(),this._IronBallPos2_i(),this._IronBallPos3_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 228;
		t.y = 424;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.rotation = 90;
		t.width = 236;
		t.x = 360.5;
		t.y = 993;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 2;
		t.height = 100;
		t.width = 100;
		t.x = 765;
		t.y = 1129;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 0.1;
		t.height = 100;
		t.width = 100;
		t.x = 651;
		t.y = 560;
		return t;
	};
	_proto._BoomBoxPos3_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 0.1;
		t.height = 100;
		t.width = 100;
		t.x = 193;
		t.y = 795;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 639;
		t.y = 1229;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 503;
		t.y = 324;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 540.58;
		t.y = 580;
		return t;
	};
	_proto._IronBallPos3_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 345.24;
		t.y = 815;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 556;
		t.x = 1;
		t.y = 424;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 80;
		t.x = 574;
		t.y = 424;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 525;
		t.x = 574;
		t.y = 524;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 392;
		t.x = 69;
		t.y = 523;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 621;
		t.x = 69;
		t.y = 895;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 70;
		t.x = 710;
		t.y = 895;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 419;
		t.x = 710;
		t.y = 985;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 264;
		t.x = 311;
		t.y = 985;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 590;
		t.x = 311;
		t.y = 1229;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 537.88;
		t.x = 362.12;
		t.y = 660;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l26.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain","e1","e0"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i(),this._SingleTerrainPos4_i(),this._SingleTerrainPos5_i(),this._WoodStripPos1_i(),this._ThornPos1_i(),this._IronStripPos1_i(),this.terrain_i(),this.e1_i(),this.e0_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 720;
		t.y = 300;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 300;
		t.x = 260;
		t.y = 240;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 60;
		t.x = 260;
		t.y = 300;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 260;
		t.y = 430;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos4_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 500;
		t.y = 430;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos5_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 60;
		t.x = 500;
		t.y = 300;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._WoodStripPos1_i = function () {
		var t = new WoodStripPos();
		t.height = 20;
		t.width = 300;
		t.x = 314.93;
		t.y = 403.92;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 180;
		t.width = 150;
		t.x = 485;
		t.y = 400;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 200;
		t.x = 474.93;
		t.y = 40;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1200;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 600;
		t.x = 120;
		t.y = 1200;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 700;
		t.y = 1200;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 300;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 414.93;
		t.y = 1200;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 350;
		t.y = 240;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l27.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._IronBallPos1_i(),this._IronBallPos2_i(),this._WoodStripPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 811.34;
		t.y = 1000;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 460;
		t.y = 600;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.width = 100;
		t.x = 80.66;
		t.y = 996.67;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 190;
		t.y = 94.65;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 630;
		t.y = 94.65;
		return t;
	};
	_proto._WoodStripPos1_i = function () {
		var t = new WoodStripPos();
		t.height = 20;
		t.width = 500;
		t.x = 211.33;
		t.y = 194.65;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 161.33;
		t.y = 846.67;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 585.36;
		t.y = 850;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 380;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 360;
		t.y = 1000;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 360;
		t.y = 600;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 560;
		t.y = 600;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 340;
		t.x = 560;
		t.y = 1000;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 60;
		t.x = 333.34;
		t.y = 214.65;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 60;
		t.x = 525.36;
		t.y = 214.65;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l28.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._IronBallPos1_i(),this._ThornPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 701.92;
		t.y = 368;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 120;
		t.width = 120;
		t.x = 397;
		t.y = 248;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.rotation = -90;
		t.width = 248;
		t.x = 401;
		t.y = 1098;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 207;
		t.y = 1257;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 318.21;
		t.y = 1257;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 480;
		t.x = 100;
		t.y = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 30;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 100;
		t.y = 564.15;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 44;
		t.x = 446.41;
		t.y = 765.47;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 367;
		t.x = 446.41;
		t.y = 825.47;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 451;
		t.x = 100;
		t.y = 825.47;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 314;
		t.x = 100;
		t.y = 1257;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 167;
		t.x = 401;
		t.y = 1277;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 98;
		t.x = 401;
		t.y = 1098;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 324.58;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 393;
		t.x = 486;
		t.y = 1098;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 253;
		t.x = 792.48;
		t.y = 888.34;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 210;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 412;
		t.x = 793.48;
		t.y = 655;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 59;
		t.x = 437;
		t.y = 447;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 465;
		t.x = 436.41;
		t.y = 368;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l29.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 810;
		t.y = 700;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 610;
		t.y = 700;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 348;
		t.y = 1200;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 420;
		t.y = 1100;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 280;
		t.x = 0;
		t.y = 700;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 520;
		t.x = 280;
		t.y = 700;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 280;
		t.x = 280;
		t.y = 1200;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 540;
		t.y = 1200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 360;
		t.x = 540;
		t.y = 700;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l3.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._StaticIronStripPos1_i(),this._StaticIronStripPos2_i(),this._StaticIronStripPos3_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._EnemyPos4_i(),this._StaticIronStripPos4_i(),this._StaticIronStripPos5_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 450;
		t.y = 837;
		return t;
	};
	_proto._StaticIronStripPos1_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 50;
		t.x = 425;
		t.y = 837;
		return t;
	};
	_proto._StaticIronStripPos2_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 100;
		t.x = 148;
		t.y = 469;
		return t;
	};
	_proto._StaticIronStripPos3_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 100;
		t.x = 684;
		t.y = 469;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 198;
		t.y = 469;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 734;
		t.y = 469;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 734;
		t.y = 1127;
		return t;
	};
	_proto._EnemyPos4_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 190;
		t.y = 1127;
		return t;
	};
	_proto._StaticIronStripPos4_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 100;
		t.x = 138;
		t.y = 1127;
		return t;
	};
	_proto._StaticIronStripPos5_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 100;
		t.x = 684;
		t.y = 1127;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1400;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l30.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["ironStrip","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this.ironStrip_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 186;
		t.y = 700;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 642;
		t.y = 1200;
		return t;
	};
	_proto.ironStrip_i = function () {
		var t = new IronStripPos();
		this.ironStrip = t;
		t.height = 20;
		t.rotation = 90;
		t.width = 450;
		t.x = 524;
		t.y = 250;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 574;
		t.x = 0;
		t.y = 700;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 520;
		t.x = 580;
		t.y = 700;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 160;
		t.x = 560;
		t.y = 1200;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 835;
		t.x = 700;
		t.y = 1200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 362;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l31.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._StaticWoodStripPos1_i(),this._IronStripPos1_i(),this._BoomBoxPos1_i(),this._IronBoxPos1_i(),this._IronBoxPos2_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 361.47;
		t.y = 700;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 125;
		t.y = 700;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 350;
		t.x = 273.99;
		t.y = 998.3;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 530;
		t.x = 274.16;
		t.y = 467.68;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 498.33;
		t.y = 1198.3;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 370;
		t.y = 1248.3;
		return t;
	};
	_proto._IronBoxPos2_i = function () {
		var t = new IronBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 496;
		t.y = 600;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 250;
		t.x = 0;
		t.y = 700;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 250;
		t.y = 700;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 150;
		t.x = 250;
		t.y = 1100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 270;
		t.x = 120;
		t.y = 1100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 600;
		t.x = 120;
		t.y = 1350;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 976;
		t.x = 700;
		t.y = 1350;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 362;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 396;
		t.width = 266;
		t.x = 287;
		t.y = 700;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l32.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._StaticWoodStripPos1_i(),this._BoomBoxPos1_i(),this._StaticThornPos1_i(),this._StaticThornPos2_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 448.33;
		t.y = 1286;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 245;
		t.y = 700;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 651.33;
		t.y = 700;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 0;
		t.width = 350;
		t.x = 285;
		t.y = 256.3;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.boommass = 1.5;
		t.boomrange = 5;
		t.height = 120;
		t.width = 120;
		t.x = 390;
		t.y = 136.3;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.height = 40;
		t.rotation = 90;
		t.width = 319;
		t.x = 140;
		t.y = 450.5;
		return t;
	};
	_proto._StaticThornPos2_i = function () {
		var t = new StaticThornPos();
		t.height = 40;
		t.rotation = -90;
		t.width = 319;
		t.x = 760;
		t.y = 769.5;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1105;
		t.x = 100;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 720;
		t.x = 100;
		t.y = 1285.3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1073;
		t.x = 800;
		t.y = 1286;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 800;
		t.y = 200;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 150;
		t.x = 178;
		t.y = 700;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 150;
		t.x = 558;
		t.y = 700;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l33.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._StaticWoodStripPos1_i(),this._BoomBoxPos1_i(),this._SpinIronStripPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 683;
		t.y = 1284;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 825;
		t.y = 508;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 0;
		t.width = 350;
		t.x = 315;
		t.y = 261.3;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 121;
		t.y = 851;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.fillColor = 0x000000;
		t.height = 20;
		t.mask = 0.5;
		t.nailX = 200;
		t.nailY = 10;
		t.width = 400;
		t.x = 109;
		t.y = 972;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetY = 0;
		t.height = 200;
		t.mass = 8;
		t.width = 200;
		t.x = 387;
		t.y = 61.3;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 280;
		t.x = 0;
		t.y = 993;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 311;
		t.x = 293;
		t.y = 993;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 479;
		t.x = 293;
		t.y = 1284;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 758;
		t.x = 752;
		t.y = 1284;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 146;
		t.x = 752;
		t.y = 508;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l34.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._StaticWoodStripPos1_i(),this._IronBallPos1_i(),this._IronBallPos2_i(),this._IronBallPos3_i(),this._WoodBoxPos1_i(),this._IronStripPos1_i(),this._StaticThornPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 812;
		t.y = 559;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 130;
		t.y = 562;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 829;
		t.y = 1288;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 0;
		t.width = 420;
		t.x = 1;
		t.y = 327.3;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 174;
		t.y = 247.3;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 254;
		t.y = 247.3;
		return t;
	};
	_proto._IronBallPos3_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 334;
		t.y = 247.3;
		return t;
	};
	_proto._WoodBoxPos1_i = function () {
		var t = new WoodBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 421;
		t.y = 559;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 20;
		t.width = 433;
		t.x = 155.5;
		t.y = 542;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 50;
		t.width = 361;
		t.x = 89;
		t.y = 1238;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 80;
		t.x = 0;
		t.y = 349;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 234;
		t.x = 80;
		t.y = 349;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 118;
		t.x = 80;
		t.y = 562;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 65;
		t.x = 218;
		t.y = 562;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 160;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 167;
		t.x = 218;
		t.y = 627;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 634;
		t.x = 80;
		t.y = 674;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 402;
		t.x = 80;
		t.y = 1288;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 528;
		t.x = 462.5;
		t.y = 1289.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 106;
		t.x = 462.5;
		t.y = 760;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 549;
		t.x = 583.5;
		t.y = 760;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 328;
		t.x = 573.5;
		t.y = 1289;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69;
		t.width = 120;
		t.x = 779;
		t.y = 558.3;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l35.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy","woodStript","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._EnemyPos1_i(),this.enemy_i(),this._EnemyPos2_i(),this._StaticWoodStripPos1_i(),this.woodStript_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 683;
		t.y = 1284;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 267;
		t.y = 1165.96;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 186.21;
		t.y = 1285.96;
		return t;
	};
	_proto.enemy_i = function () {
		var t = new EnemyPos();
		this.enemy = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 217;
		t.y = 623.64;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 459;
		t.y = 1285.96;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.55;
		t.width = 370;
		t.x = 430;
		t.y = 801.52;
		return t;
	};
	_proto.woodStript_i = function () {
		var t = new StaticWoodStripPos();
		this.woodStript = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.55;
		t.width = 370;
		t.x = 100;
		t.y = 623.64;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 200;
		t.width = 200;
		t.x = 309;
		t.y = 423.64;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 506;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 800;
		t.x = 100;
		t.y = 505.96;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 719;
		t.x = 100;
		t.y = 1285.52;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 774;
		t.x = 800;
		t.y = 1285.96;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 800;
		t.y = 506;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l36.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._BoomBoxPos3_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._IronBallPos1_i(),this._StaticWoodStripPos1_i(),this._StaticWoodStripPos2_i(),this._IronBoxPos1_i(),this._IronBoxPos2_i(),this._IronBoxPos3_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 250;
		t.y = 504.48;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 560.58;
		t.y = 1307.99;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 560.58;
		t.y = 924.31;
		return t;
	};
	_proto._BoomBoxPos3_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 560.58;
		t.y = 635.5;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 264.5;
		t.y = 1134.31;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 263.19;
		t.y = 1432;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 281;
		t.y = 825.52;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 403;
		t.y = 406;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 228;
		t.x = 473.5;
		t.y = 1040.52;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 228;
		t.x = 473;
		t.y = 755.52;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 50;
		t.width = 50;
		t.x = 455;
		t.y = 707.04;
		return t;
	};
	_proto._IronBoxPos2_i = function () {
		var t = new IronBoxPos();
		t.height = 50;
		t.width = 50;
		t.x = 450;
		t.y = 991.52;
		return t;
	};
	_proto._IronBoxPos3_i = function () {
		var t = new IronBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 425;
		t.y = 1329.51;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 0;
		t.y = 506;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 150;
		t.x = 500;
		t.y = 506.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 500;
		t.y = 675.52;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 399;
		t.y = 675.52;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 271;
		t.x = 400;
		t.y = 595.52;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 250;
		t.x = 149;
		t.y = 595.52;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 265;
		t.x = 148.33;
		t.y = 825.52;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 50;
		t.x = 393;
		t.y = 826.52;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 110;
		t.x = 393;
		t.y = 775.52;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 150;
		t.x = 503;
		t.y = 775.52;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 379;
		t.x = 502.69;
		t.y = 925.52;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 230;
		t.x = 143.69;
		t.y = 925.52;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 269;
		t.x = 143.33;
		t.y = 1135.52;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 50;
		t.x = 391.34;
		t.y = 1135.83;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 110;
		t.x = 392.01;
		t.y = 1065.52;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 150;
		t.x = 502.66;
		t.y = 1065.52;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 379;
		t.x = 500;
		t.y = 1215.52;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 234;
		t.x = 141.69;
		t.y = 1215.52;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 582;
		t.x = 140.17;
		t.y = 1429.52;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1206;
		t.x = 701.5;
		t.y = 1431.04;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 199;
		t.x = 701.5;
		t.y = 216.61;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l37.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["woodStript","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._EnemyPos4_i(),this._StaticWoodStripPos1_i(),this.woodStript_i(),this._IronStripPos1_i(),this._IronStripPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 130;
		t.y = 504.48;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 401.61;
		t.y = 710.78;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 399.5;
		t.y = 590.78;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 396.96;
		t.y = 1118.3;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 200;
		t.y = 1440.44;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 729.53;
		t.y = 1440.44;
		return t;
	};
	_proto._EnemyPos4_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 523.13;
		t.y = 1118.3;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.55;
		t.width = 370;
		t.x = 274.5;
		t.y = 1118.3;
		return t;
	};
	_proto.woodStript_i = function () {
		var t = new StaticWoodStripPos();
		this.woodStript = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.55;
		t.width = 370;
		t.x = 274.5;
		t.y = 830.78;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.rotation = 90;
		t.width = 200;
		t.x = 346.96;
		t.y = 630.78;
		return t;
	};
	_proto._IronStripPos2_i = function () {
		var t = new IronStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.rotation = 90;
		t.width = 200;
		t.x = 576.17;
		t.y = 632.3;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 0;
		t.y = 506;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 40;
		t.x = 200;
		t.y = 506;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 200;
		t.y = 566;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 896.9;
		t.x = 100;
		t.y = 565.46;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 719;
		t.x = 100;
		t.y = 1442.36;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 929.6;
		t.x = 800;
		t.y = 1442.36;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 800;
		t.y = 506;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l38.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._IronBallPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 173.94;
		t.y = 830.79;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 149.7;
		t.y = 1440.84;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 298.94;
		t.y = 1285.91;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 400;
		t.y = 732.31;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 567.72;
		t.y = 1287.43;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 223.94;
		t.y = 1290.47;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 820;
		t.x = 0;
		t.y = 1442.36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 929.6;
		t.x = 800;
		t.y = 1442.36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 800;
		t.y = 506;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 126.97;
		t.width = 537.58;
		t.x = 0;
		t.y = 830.79;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 516.36;
		t.width = 154.25;
		t.x = 383.75;
		t.y = 939.55;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l39.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.enemy_i(),this._SpinIronStripPos1_i(),this.terrain_i(),this._PlayerPos1_i()];
	}
	var _proto = l0.prototype;

	_proto.enemy_i = function () {
		var t = new EnemyPos();
		this.enemy = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 250;
		t.y = 504.48;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 230;
		t.nailX = 10;
		t.nailY = 220;
		t.rotation = 0;
		t.width = 20;
		t.x = 456;
		t.y = 307;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 290.67;
		t.x = 0;
		t.y = 506;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 790;
		t.x = 306;
		t.y = 506;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 344;
		t.x = 306;
		t.y = 1278;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 774;
		t.x = 631;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 269;
		t.x = 631;
		t.y = 506;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 765.5;
		t.y = 504.48;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l4.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._WoodBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 136.33;
		t.y = 1000;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 749;
		t.y = 1000;
		return t;
	};
	_proto._WoodBoxPos1_i = function () {
		var t = new WoodBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 383;
		t.y = 800;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1000;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l40.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._WoodBoxPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 102.38;
		t.y = 1303.03;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 375.5;
		t.y = 1306.03;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 500.69;
		t.y = 1175.03;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 648.67;
		t.y = 1020.03;
		return t;
	};
	_proto._WoodBoxPos1_i = function () {
		var t = new WoodBoxPos();
		t.anchorOffsetX = 0;
		t.height = 120;
		t.width = 120;
		t.x = 693;
		t.y = 629.98;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.width = 150;
		t.x = 664.03;
		t.y = 492;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 220;
		t.x = 0;
		t.y = 1303;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 118;
		t.x = 199;
		t.y = 1304;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21;
		t.anchorOffsetY = 1;
		t.height = 93;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 20;
		t.x = 199;
		t.y = 1166;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 157;
		t.x = 303;
		t.y = 1166;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 159;
		t.x = 301;
		t.y = 1303;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 116.67;
		t.x = 440;
		t.y = 1308;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 19;
		t.anchorOffsetY = 1.68;
		t.height = 156;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 20;
		t.x = 442;
		t.y = 1175;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 1.05;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 135;
		t.x = 577;
		t.y = 1175;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21.42;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 20;
		t.x = 576;
		t.y = 1020;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 252;
		t.x = 721;
		t.y = 1022;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 180;
		t.x = 721;
		t.y = 751;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l41.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._IronBallPos1_i(),this._BoomBoxPos1_i(),this._StaticWoodStripPos1_i(),this._StaticIronStripPos1_i(),this._StaticWoodStripPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 230;
		t.y = 1299.03;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 809.97;
		t.y = 1139;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 410;
		t.y = 350;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 60;
		t.x = 651;
		t.y = 1078;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.anchorOffsetX = 0;
		t.height = 100;
		t.width = 100;
		t.x = 126;
		t.y = 408;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.width = 200;
		t.x = 317;
		t.y = 350;
		return t;
	};
	_proto._StaticIronStripPos1_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 400;
		t.x = 226;
		t.y = 443;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 150;
		t.x = 173;
		t.y = 508;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -2;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 489;
		t.x = 0;
		t.y = 1300;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.rotation = 312;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 220;
		t.x = 473;
		t.y = 1303;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 280;
		t.x = 620;
		t.y = 1140;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l42.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e0","e1","e2","s0","s1","s2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this.e0_i(),this.e1_i(),this.e2_i(),this.s0_i(),this.s1_i(),this.s2_i(),this._StaticWoodStripPos1_i(),this._IronBoxPos1_i(),this._BoomBoxPos1_i(),this.terrain_i(),this._StaticThornPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 277;
		t.y = 420;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 566;
		t.y = 480;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 661;
		t.y = 1040;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 742;
		t.y = 800;
		return t;
	};
	_proto.s0_i = function () {
		var t = new StaticWoodStripPos();
		this.s0 = t;
		t.height = 20;
		t.width = 300;
		t.x = 500;
		t.y = 480;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.height = 20;
		t.width = 200;
		t.x = 600;
		t.y = 1040;
		return t;
	};
	_proto.s2_i = function () {
		var t = new StaticWoodStripPos();
		this.s2 = t;
		t.height = 20;
		t.width = 200;
		t.x = 600;
		t.y = 800;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 200;
		t.x = 456;
		t.y = 293;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 160;
		t.width = 160;
		t.x = 632;
		t.y = 320;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 50;
		t.width = 50;
		t.x = 731;
		t.y = 990;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 180;
		t.x = 0;
		t.y = 240;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 200;
		t.y = 240;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 200;
		t.y = 420;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 320;
		t.x = 340;
		t.y = 420;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 340;
		t.y = 720;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 320;
		t.x = 480;
		t.y = 720;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 480;
		t.y = 1060;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 300;
		t.y = 1060;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 520;
		t.x = 300;
		t.y = 1440;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1180;
		t.x = 800;
		t.y = 1440;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 800;
		t.y = 240;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.rotation = 90;
		t.width = 340;
		t.x = 520;
		t.y = 720;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l43.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain","enemy","enemy0"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.terrain_i(),this._SingleTerrainPos1_i(),this._PlayerPos1_i(),this.enemy_i(),this.enemy0_i(),this._IronBoxPos1_i(),this._StaticThornPos1_i()];
	}
	var _proto = l0.prototype;

	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 0;
		t.y = 220;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 56;
		t.x = 300;
		t.y = 220;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 168;
		t.x = 300;
		t.y = 296;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1000;
		t.x = 153;
		t.y = 296;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 350.67;
		t.x = 153;
		t.y = 1276;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 324;
		t.x = 483.67;
		t.y = 1276;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 417;
		t.x = 483.67;
		t.y = 952;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.width = 208;
		t.x = 337;
		t.y = 558.3;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 795.03;
		t.y = 950.48;
		return t;
	};
	_proto.enemy_i = function () {
		var t = new EnemyPos();
		this.enemy = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 598;
		t.y = 952;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 390.34;
		t.y = 559.82;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 475;
		t.y = 459.82;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.rotation = 0;
		t.width = 328;
		t.x = 150;
		t.y = 1221;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l44.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain","enemy0"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.terrain_i(),this._SingleTerrainPos1_i(),this._IronBoxPos1_i(),this._IronBoxPos2_i(),this._PlayerPos1_i(),this._IronStripPos1_i(),this._BoomBoxPos1_i(),this._IronBallPos1_i(),this.enemy0_i()];
	}
	var _proto = l0.prototype;

	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 220;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1000;
		t.x = 100;
		t.y = 220;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 342;
		t.x = 100;
		t.y = 1199.52;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 450;
		t.y = 1200;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 450;
		t.y = 1380;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 630;
		t.y = 1380;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 428;
		t.x = 630;
		t.y = 900;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 192;
		t.y = 900;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 640;
		t.x = 192;
		t.y = 700;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 700;
		t.x = 812;
		t.y = 700;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 89;
		t.x = 812;
		t.y = 1.52;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 570;
		t.width = 80;
		t.x = 300;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 60;
		t.width = 60;
		t.x = 450.48;
		t.y = 638.48;
		return t;
	};
	_proto._IronBoxPos2_i = function () {
		var t = new IronBoxPos();
		t.height = 60;
		t.width = 60;
		t.x = 182;
		t.y = 636.96;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 742;
		t.y = 700;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 30;
		t.width = 202;
		t.x = 244.96;
		t.y = 668.48;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 117;
		t.y = 1048;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 300;
		t.y = 1098;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 542.41;
		t.y = 1375.45;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l45.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._StaticWoodStripPos1_i(),this._IronBallPos1_i(),this._StaticIronStripPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 710;
		t.y = 615;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 638;
		t.y = 1466;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 80;
		t.width = 80;
		t.x = 388;
		t.y = 1386;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 80;
		t.width = 80;
		t.x = 289;
		t.y = 1386;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 200;
		t.x = 418;
		t.y = 555;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.height = 200;
		t.mass = 5;
		t.width = 200;
		t.x = 398.66;
		t.y = 355;
		return t;
	};
	_proto._StaticIronStripPos1_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 300;
		t.x = 520;
		t.y = 1165;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = -2;
		t.y = 1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 136;
		t.x = 0;
		t.y = 300;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1185;
		t.x = 140;
		t.y = 300;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 660;
		t.x = 140;
		t.y = 1465;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 800;
		t.x = 780;
		t.y = 1465;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 685;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 50;
		t.x = 640;
		t.y = 685;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 160;
		t.x = 640;
		t.y = 615;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 295;
		t.x = 780;
		t.y = 615;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 300;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.width = 79;
		t.x = 138;
		t.y = 529;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l46.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["s0","s2","s3","s1","e0","e1","e2","e3","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this.s0_i(),this.s2_i(),this.s3_i(),this.s1_i(),this.e0_i(),this.e1_i(),this.e2_i(),this.e3_i(),this._StaticThornPos1_i(),this._StaticThornPos2_i(),this._StaticWoodStripPos1_i(),this._StaticWoodStripPos2_i(),this._IronBallPos1_i(),this._IronBallPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 450;
		t.y = 560;
		return t;
	};
	_proto.s0_i = function () {
		var t = new StaticWoodStripPos();
		this.s0 = t;
		t.height = 20;
		t.width = 200;
		t.x = 200;
		t.y = 764;
		return t;
	};
	_proto.s2_i = function () {
		var t = new StaticWoodStripPos();
		this.s2 = t;
		t.height = 20;
		t.width = 200;
		t.x = 200;
		t.y = 1006;
		return t;
	};
	_proto.s3_i = function () {
		var t = new StaticWoodStripPos();
		this.s3 = t;
		t.height = 20;
		t.width = 200;
		t.x = 500;
		t.y = 1006;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.height = 20;
		t.width = 200;
		t.x = 500;
		t.y = 764;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 329;
		t.y = 764;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 576;
		t.y = 765.52;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 329;
		t.y = 1007.52;
		return t;
	};
	_proto.e3_i = function () {
		var t = new EnemyPos();
		this.e3 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 576;
		t.y = 1007.52;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.width = 280;
		t.x = 120;
		t.y = 1240;
		return t;
	};
	_proto._StaticThornPos2_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.width = 280;
		t.x = 500;
		t.y = 1240;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 200;
		t.x = 120;
		t.y = 254;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 200;
		t.x = 580;
		t.y = 254;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 134;
		t.y = 154;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 663;
		t.y = 153;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 120;
		t.y = 1280;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 700;
		t.x = 400;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 400;
		t.y = 560;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 720;
		t.x = 500;
		t.y = 580;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 500;
		t.y = 1280;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1079;
		t.x = 780;
		t.y = 1280;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 200;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l47.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._EnemyPos3_i(),this._BoomBoxPos1_i(),this._SpinIronStripPos1_i(),this._StaticWoodStripPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 798;
		t.y = 475;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 345;
		t.y = 1325;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 707.5;
		t.y = 1325;
		return t;
	};
	_proto._EnemyPos3_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 370;
		t.y = 801.52;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 450;
		t.y = 1174.52;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.height = 20;
		t.nailX = 90;
		t.nailY = 140;
		t.rotation = -65;
		t.width = 300;
		t.x = 295;
		t.y = 394;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 337;
		t.x = 460;
		t.y = 1.52;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 402;
		t.x = 0;
		t.y = 800;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 136;
		t.x = 420;
		t.y = 800;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 250;
		t.x = 420;
		t.y = 946;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 190;
		t.y = 944.52;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 643;
		t.x = 190;
		t.y = 1324.52;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 812;
		t.y = 1324.52;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 195;
		t.x = 815.5;
		t.y = 945;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 450;
		t.x = 616;
		t.y = 945;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 283;
		t.x = 616;
		t.y = 475;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l48.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._EnemyPos2_i(),this._StaticThornPos1_i(),this._SpinIronStripPos1_i(),this._StaticWoodStripPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 470;
		t.y = 692.52;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 95;
		t.y = 692.52;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.boomrange = 5;
		t.height = 150;
		t.width = 150;
		t.x = 585;
		t.y = 1174.52;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 500;
		t.y = 1326.04;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.rotation = 90;
		t.width = 525;
		t.x = 230;
		t.y = 799.52;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.height = 20;
		t.nailX = 175;
		t.nailY = 120;
		t.rotation = -110;
		t.width = 275;
		t.x = 470;
		t.y = 300;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 70;
		t.rotation = 0;
		t.width = 70;
		t.x = 310;
		t.y = 50.36;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 0;
		t.y = 692.52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 101;
		t.x = 520;
		t.y = 692.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 350;
		t.x = 520;
		t.y = 796.52;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 547;
		t.x = 190;
		t.y = 797;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 580;
		t.x = 190;
		t.y = 1324.52;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 633;
		t.x = 750;
		t.y = 1326.04;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 150;
		t.x = 750;
		t.y = 692.52;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l49.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._SpinIronStripPos1_i(),this._SingleTerrainPos1_i(),this._IronBallPos1_i(),this._SingleTerrainPos2_i(),this._IronBallPos2_i(),this._PlayerPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.width = 20;
		t.x = 416.66;
		t.y = 537.5;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 202;
		t.y = 1334;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.width = 100;
		t.x = 634;
		t.y = 1334;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.height = 20;
		t.mass = 0.3;
		t.nailX = 150;
		t.nailY = 0;
		t.rotation = -60;
		t.width = 300;
		t.x = 333;
		t.y = 661;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.width = 60;
		t.x = 325;
		t.y = 451;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.mass = 1;
		t.width = 80;
		t.x = 339;
		t.y = 371;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 121;
		t.x = 363;
		t.y = 696;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.mass = 1;
		t.width = 80;
		t.x = 426.66;
		t.y = 616;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 818;
		t.y = 671;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 407;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 946;
		t.x = 120;
		t.y = 407;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 648;
		t.x = 120;
		t.y = 1334;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 633;
		t.x = 748;
		t.y = 1334;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 748;
		t.y = 721;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 30;
		t.x = 628;
		t.y = 721;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 276;
		t.x = 628;
		t.y = 671;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l5.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","enemy2","swoodStrip","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.enemy1_i(),this._PlayerPos1_i(),this.enemy2_i(),this.swoodStrip_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.width = 100;
		t.x = 450;
		t.y = 497;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 150;
		t.y = 906;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 596;
		t.y = 497;
		return t;
	};
	_proto.swoodStrip_i = function () {
		var t = new StaticWoodStripPos();
		this.swoodStrip = t;
		t.height = 20;
		t.width = 400;
		t.x = 320;
		t.y = 497;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 0;
		t.y = 908;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 300;
		t.y = 908;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 300;
		t.y = 1308;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 700;
		t.y = 1308;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 908;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l50.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._SpinIronStripPos1_i(),this._IronBallPos1_i(),this._BoomBoxPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 750;
		t.y = 990.96;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 644;
		t.y = 1280;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 770;
		t.y = 1280;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.height = 20;
		t.nailX = 130;
		t.nailY = 10;
		t.width = 300;
		t.x = 49;
		t.y = 1154;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.mass = 5;
		t.width = 100;
		t.x = 307;
		t.y = 143.04;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.anchorOffsetX = 0;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 65;
		t.y = 1051;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.y = 0.96;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 160;
		t.x = 0;
		t.y = 1180;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 420;
		t.x = 180;
		t.y = 1180;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 390;
		t.x = 180;
		t.y = 1580;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 280;
		t.x = 550;
		t.y = 1580;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 550;
		t.y = 1280;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 230;
		t.x = 830;
		t.y = 1280;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 110;
		t.x = 830;
		t.y = 1070;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 60;
		t.x = 700;
		t.y = 1070;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 990;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 68;
		t.x = 323;
		t.y = 244;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.width = 220;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l51.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["s1","e1","e2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.s1_i(),this._IronBoxPos1_i(),this._PlayerPos1_i(),this.e1_i(),this.e2_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._BoomBoxPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i()];
	}
	var _proto = l0.prototype;

	_proto.s1_i = function () {
		var t = new WoodStripPos();
		this.s1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.width = 900;
		t.x = 8;
		t.y = 420;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 300;
		t.width = 300;
		t.x = 320.17;
		t.y = 119.67;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 719;
		t.y = 784.34;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 714;
		t.y = 419.67;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 216;
		t.y = 419.67;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 231.14;
		t.y = 1280;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 679.92;
		t.y = 1280;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 375;
		t.y = 1130;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 466;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 833;
		t.x = 120;
		t.y = 466;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 681;
		t.x = 120;
		t.y = 1280;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 810;
		t.x = 780;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 466;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 132;
		t.x = 104;
		t.y = 782.82;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 132;
		t.x = 669;
		t.y = 782.82;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l52.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy2","swoodStrip","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._WoodBoxPos1_i(),this.enemy2_i(),this.swoodStrip_i(),this._IronStripPos1_i(),this._WoodBoxPos2_i(),this._WoodBoxPos3_i(),this._WoodBoxPos4_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 133.3;
		t.y = 1165.58;
		return t;
	};
	_proto._WoodBoxPos1_i = function () {
		var t = new WoodBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 700;
		t.y = 965.58;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 609.58;
		t.y = 1165.58;
		return t;
	};
	_proto.swoodStrip_i = function () {
		var t = new StaticWoodStripPos();
		this.swoodStrip = t;
		t.height = 20;
		t.width = 200;
		t.x = 476.67;
		t.y = 328.55;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 20;
		t.width = 300;
		t.x = 450;
		t.y = 945.58;
		return t;
	};
	_proto._WoodBoxPos2_i = function () {
		var t = new WoodBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 426.67;
		t.y = 1065.58;
		return t;
	};
	_proto._WoodBoxPos3_i = function () {
		var t = new WoodBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 326.67;
		t.y = 1065.58;
		return t;
	};
	_proto._WoodBoxPos4_i = function () {
		var t = new WoodBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 400;
		t.y = 965.58;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 526.67;
		t.y = 228.55;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1165.58;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l53.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._SingleTerrainPos1_i(),this._BoomBoxPos1_i(),this._IronStripPos1_i(),this.enemy2_i(),this._PlayerPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382;
		t.width = 270.88;
		t.x = 276.94;
		t.y = 658;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 594.77;
		t.y = 1225.43;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 20;
		t.width = 150;
		t.x = 594.77;
		t.y = 1205.43;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 669.77;
		t.y = 1205.43;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 509.94;
		t.y = 658;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 100;
		t.x = 236.94;
		t.y = 558;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 1.52;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1123;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 30.14;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 549;
		t.x = 120;
		t.y = 1106;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 183.33;
		t.x = 583.91;
		t.y = 1375.43;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 698;
		t.x = 748;
		t.y = 1375.43;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 152.33;
		t.x = 748;
		t.y = 671;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l54.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy2","enemy0","enemy1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._SingleTerrainPos1_i(),this.enemy2_i(),this.enemy0_i(),this.enemy1_i(),this._StaticWoodStripPos1_i(),this._StaticWoodStripPos2_i(),this._ThornPos1_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 542;
		t.y = 602;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 214;
		t.width = 68.88;
		t.x = 505;
		t.y = 602;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 620;
		t.y = 1375.43;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 198;
		t.y = 1375.43;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 421.88;
		t.y = 1375.43;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.width = 283;
		t.x = 134;
		t.y = 240;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.width = 296;
		t.x = 138;
		t.y = 932;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.rotation = 180;
		t.width = 263;
		t.x = 407;
		t.y = 240;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 257.5;
		t.y = 1275.43;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 1.52;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1396;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 649.33;
		t.x = 120;
		t.y = 1375.43;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 698;
		t.x = 748;
		t.y = 1375.43;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 152.33;
		t.x = 748;
		t.y = 671;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l55.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","enemy0","enemy2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.enemy1_i(),this.enemy0_i(),this.enemy2_i(),this._PlayerPos1_i(),this._SpinIronStripPos1_i(),this._StaticWoodStripPos1_i(),this._IronBallPos1_i(),this._IronBallPos2_i(),this._IronBallPos3_i(),this._IronBallPos4_i(),this._IronBallPos5_i(),this._StaticWoodStripPos2_i(),this._StaticThornPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 612;
		t.y = 1375.43;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 401.49;
		t.y = 936.1;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 205.66;
		t.y = 571;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 824.17;
		t.y = 671;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.anchorOffsetX = 0;
		t.height = 40;
		t.nailX = 169;
		t.nailY = 169;
		t.rotation = 90;
		t.width = 338;
		t.x = 450;
		t.y = 201;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 259;
		t.x = 121;
		t.y = 133;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 164.78;
		t.y = 83;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 233.25;
		t.y = 83;
		return t;
	};
	_proto._IronBallPos3_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 300.13;
		t.y = 83;
		return t;
	};
	_proto._IronBallPos4_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 196.16;
		t.y = 33;
		return t;
	};
	_proto._IronBallPos5_i = function () {
		var t = new IronBallPos();
		t.height = 50;
		t.width = 50;
		t.x = 272.33;
		t.y = 33;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 220;
		t.x = 502;
		t.y = 1079;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.rotation = 0;
		t.width = 181.33;
		t.x = 123;
		t.y = 1317;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 1.52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 593;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 152.33;
		t.x = 120;
		t.y = 574;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 65;
		t.x = 282.33;
		t.y = 574;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 154.17;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 201.3;
		t.x = 283.25;
		t.y = 640.09;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 673.67;
		t.x = 116.85;
		t.y = 720.59;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 215.33;
		t.x = 116.85;
		t.y = 1375.43;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 439.33;
		t.x = 315.33;
		t.y = 1375.43;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 152.33;
		t.x = 325.33;
		t.y = 936.1;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 458.33;
		t.x = 477.66;
		t.y = 936.1;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 291.33;
		t.x = 477.66;
		t.y = 1376;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 698;
		t.x = 748;
		t.y = 1375.43;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 152.33;
		t.x = 748;
		t.y = 671;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l56.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","enemy0","enemy2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this.enemy1_i(),this.enemy0_i(),this.enemy2_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._BoomBoxPos3_i(),this._IronBallPos1_i(),this._StaticThornPos1_i(),this._ThornPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 841.05;
		t.y = 482.52;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 597.59;
		t.y = 1013.6;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 716.01;
		t.y = 1375.95;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 245;
		t.y = 1225.54;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 170;
		t.y = 1225.43;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 100;
		t.x = 158.85;
		t.y = 474;
		return t;
	};
	_proto._BoomBoxPos3_i = function () {
		var t = new BoomBoxPos();
		t.anchorOffsetY = 0;
		t.height = 100;
		t.width = 100;
		t.x = 158.85;
		t.y = 374;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 286;
		t.y = 421.52;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 55;
		t.rotation = 180;
		t.width = 236;
		t.x = 388;
		t.y = 695.09;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 90;
		t.width = 200;
		t.x = 436;
		t.y = 1175.43;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 1.52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 593;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 120;
		t.y = 574;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 65;
		t.x = 420;
		t.y = 575.09;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 322.3;
		t.x = 420;
		t.y = 639;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 757.67;
		t.x = 118.67;
		t.y = 639;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 716.33;
		t.x = 116.85;
		t.y = 1375.43;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 316.83;
		t.x = 813.34;
		t.y = 1375.95;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 371.83;
		t.x = 814.33;
		t.y = 1079.12;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 65.5;
		t.x = 440;
		t.y = 1079.6;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 303.83;
		t.x = 445.67;
		t.y = 1013.6;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.71;
		t.rotation = 317.94;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 157.04;
		t.x = 735.27;
		t.y = 1014.98;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 418;
		t.x = 841.05;
		t.y = 920.92;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 59.66;
		t.x = 840.34;
		t.y = 482.52;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l57.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy0","enemy1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i(),this._SingleTerrainPos4_i(),this._PlayerPos1_i(),this.enemy0_i(),this.enemy1_i(),this._StaticWoodStripPos1_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1321.57;
		t.width = 68.88;
		t.x = 196.12;
		t.y = 1.53;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71.57;
		t.width = 215.85;
		t.x = 0.42;
		t.y = 815.94;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71.57;
		t.width = 200.7;
		t.x = 697.18;
		t.y = 519.86;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos4_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1321.57;
		t.width = 68.88;
		t.x = 647.59;
		t.y = 1.1;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1318;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 450;
		t.y = 1302.67;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 805.18;
		t.y = 519.86;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 108.35;
		t.y = 815.94;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.width = 381.34;
		t.x = 266.25;
		t.y = 282.67;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 372;
		t.y = 82.67;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image21_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1302.67;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l58.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy2","enemy0","enemy1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this.enemy2_i(),this._BoomBoxPos1_i(),this._StaticThornPos1_i(),this._StaticThornPos2_i(),this.enemy0_i(),this.enemy1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 700;
		t.y = 385;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 400;
		t.y = 385;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 350;
		t.y = 1230;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 55;
		t.rotation = 90;
		t.width = 322.67;
		t.x = 183.12;
		t.y = 1015.44;
		return t;
	};
	_proto._StaticThornPos2_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 55;
		t.rotation = 270;
		t.width = 322.67;
		t.x = 645;
		t.y = 1331.34;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 560;
		t.y = 1350;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 277.28;
		t.y = 1350;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 510;
		t.x = 145;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 73.35;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 43;
		t.x = 144.16;
		t.y = 503;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 64.64;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 50;
		t.x = 155.16;
		t.y = 539.72;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 53.31;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 47;
		t.x = 171.66;
		t.y = 575.08;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 45.12;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 54;
		t.x = 191.63;
		t.y = 603.77;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 35.21;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 48;
		t.x = 219.77;
		t.y = 631.56;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 16.18;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 40;
		t.x = 250.86;
		t.y = 652.59;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 317;
		t.x = 287.28;
		t.y = 667.77;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 182;
		t.x = 287.24;
		t.y = 984.77;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 384;
		t.x = 125.24;
		t.y = 984.77;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 594;
		t.x = 125.24;
		t.y = 1350;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 385;
		t.x = 700;
		t.y = 1350;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 984.77;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 481.33;
		t.x = 500;
		t.y = 984.77;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 500;
		t.y = 524.33;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 119.33;
		t.x = 300;
		t.y = 524.33;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 600;
		t.x = 300;
		t.y = 385;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l59.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","enemy3","enemy0","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.enemy1_i(),this.enemy3_i(),this.enemy0_i(),this._PlayerPos1_i(),this._IronBallPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._IronBallPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 382.5;
		t.y = 839.36;
		return t;
	};
	_proto.enemy3_i = function () {
		var t = new EnemyPos();
		this.enemy3 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 646;
		t.y = 1199.4;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 504;
		t.y = 726.86;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 811;
		t.y = 482.8;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 303;
		t.y = 984.33;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 130;
		t.width = 130;
		t.x = 165.5;
		t.y = 1063.41;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 484.67;
		t.y = 1100.5;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 564;
		t.y = 438.72;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 18.48;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 331;
		t.x = 0;
		t.y = 1195.41;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 18.48;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 132;
		t.x = 310.68;
		t.y = 1195.41;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 18.48;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 62;
		t.x = 310.68;
		t.y = 1063.41;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 18.48;
		t.rotation = 57.67;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 182;
		t.x = 372.68;
		t.y = 1063.41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 18.48;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 354;
		t.x = 460;
		t.y = 1201.83;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 18.48;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 275;
		t.x = 795.52;
		t.y = 1201.83;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 814;
		t.y = 936.34;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 84;
		t.x = 303;
		t.y = 936.34;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 159;
		t.x = 303;
		t.y = 842.34;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 116.67;
		t.x = 440;
		t.y = 842.34;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 19;
		t.anchorOffsetY = 1.68;
		t.height = 156;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 20;
		t.x = 441.68;
		t.y = 726.67;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 1.05;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 135;
		t.x = 577.05;
		t.y = 725.86;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 21.42;
		t.anchorOffsetY = 0;
		t.height = 165;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 20;
		t.x = 576;
		t.y = 587.3;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 101;
		t.x = 721;
		t.y = 591.86;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 180;
		t.x = 721;
		t.y = 482.8;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l6.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","enemy2","woodBox","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.enemy1_i(),this._PlayerPos1_i(),this.enemy2_i(),this.woodBox_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 522.26;
		t.y = 700;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 241.18;
		t.y = 1000;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 672.26;
		t.y = 700;
		return t;
	};
	_proto.woodBox_i = function () {
		var t = new WoodBoxPos();
		this.woodBox = t;
		t.height = 300;
		t.width = 300;
		t.x = 450;
		t.y = 700;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 820;
		t.x = 100;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 800;
		t.x = 100;
		t.y = 1000;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l60.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["s1","e1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._SingleTerrainPos1_i(),this._PlayerPos1_i(),this.s1_i(),this._StaticWoodStripPos1_i(),this._StaticWoodStripPos2_i(),this.e1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._SingleTerrainPos2_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._StaticThornPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 94;
		t.x = 390;
		t.y = 576;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 434;
		t.y = 576;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.width = 188;
		t.x = 592;
		t.y = 301.19;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.width = 188;
		t.x = 589;
		t.y = 904.52;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.width = 188;
		t.x = 120;
		t.y = 904.52;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 689;
		t.y = 300.3;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 618;
		t.y = 755.52;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 139;
		t.y = 753.52;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 352;
		t.width = 60;
		t.x = 434;
		t.y = 929.52;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = -1;
		t.width = 100;
		t.x = 464;
		t.y = 929.52;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 239;
		t.y = 1279.34;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 55;
		t.rotation = 270;
		t.width = 298;
		t.x = 379;
		t.y = 1249.86;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 196.3;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1101;
		t.x = 120;
		t.y = 197.39;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 681;
		t.x = 120;
		t.y = 1280;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1077;
		t.x = 780;
		t.y = 1279.34;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 196.3;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l61.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["s1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._PlayerPos1_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i(),this.s1_i(),this._WoodBoxPos1_i(),this._WoodBoxPos2_i(),this._ThornPos1_i(),this._ThornPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 470;
		t.y = 1352.67;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 165;
		t.y = 1178.39;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 658;
		t.y = 1178.39;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 453;
		t.y = 970;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 302;
		t.x = 302;
		t.y = 970;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.width = 76;
		t.x = 302;
		t.y = 480;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.width = 76;
		t.x = 524;
		t.y = 480;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.width = 508;
		t.x = 200;
		t.y = 455;
		return t;
	};
	_proto._WoodBoxPos1_i = function () {
		var t = new WoodBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 169;
		t.y = 355;
		return t;
	};
	_proto._WoodBoxPos2_i = function () {
		var t = new WoodBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 638;
		t.y = 355;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 90;
		t.width = 100;
		t.x = 349.5;
		t.y = 1179.34;
		return t;
	};
	_proto._ThornPos2_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 270;
		t.width = 100;
		t.x = 562.5;
		t.y = 1279.34;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 196.3;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1101;
		t.x = 120;
		t.y = 197.39;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 290;
		t.x = 120;
		t.y = 1278.67;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 94;
		t.x = 409.16;
		t.y = 1278.39;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 140;
		t.x = 410;
		t.y = 1352.67;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 76;
		t.x = 531;
		t.y = 1354.39;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 269;
		t.x = 531;
		t.y = 1278.39;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1077;
		t.x = 780;
		t.y = 1279.34;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 196.3;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l62.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._BoomBoxPos3_i(),this._BoomBoxPos4_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._PlayerPos1_i(),this._IronBoxPos1_i(),this._IronBoxPos2_i(),this._ThornPos1_i(),this._ThornPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 323;
		t.y = 1280;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 552;
		t.y = 1280;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 720;
		t.y = 1180;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 71;
		t.y = 1180;
		return t;
	};
	_proto._BoomBoxPos3_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 71;
		t.y = 1080;
		return t;
	};
	_proto._BoomBoxPos4_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 720;
		t.y = 1080;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 398;
		t.x = 253;
		t.y = 395;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 270;
		t.width = 50;
		t.x = 408;
		t.y = 1029;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 452;
		t.y = 395;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 209;
		t.y = 275;
		return t;
	};
	_proto._IronBoxPos2_i = function () {
		var t = new IronBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 583;
		t.y = 275;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 90;
		t.width = 180;
		t.x = 253;
		t.y = 1099;
		return t;
	};
	_proto._ThornPos2_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 270;
		t.width = 180;
		t.x = 641;
		t.y = 1279;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -2;
		t.y = -1.52;
		t.elementsContent = [this._Image11_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1280;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l63.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e1","s1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._PlayerPos1_i(),this._IronStripPos1_i(),this._EnemyPos1_i(),this.e1_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this.s1_i(),this._IronBallPos1_i(),this._IronBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 282.42;
		t.width = 155.58;
		t.x = 738.18;
		t.y = 59;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 380.42;
		t.width = 59.58;
		t.x = 430.79;
		t.y = 1017.01;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 203;
		t.y = 574;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 30;
		t.width = 320;
		t.x = 300.58;
		t.y = 987.01;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 203;
		t.y = 1375.43;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 645;
		t.y = 378;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 668.5;
		t.y = 1255.43;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 80;
		t.width = 80;
		t.x = 568.5;
		t.y = 1295.43;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.height = 20;
		t.width = 226;
		t.x = 534;
		t.y = 376;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 263;
		t.y = 837.01;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 548.5;
		t.y = 888.53;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 1.52;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 593;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 153;
		t.x = 120;
		t.y = 574;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 65;
		t.x = 273;
		t.y = 574;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 175.3;
		t.x = 270;
		t.y = 639;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 757.67;
		t.x = 118.67;
		t.y = 639;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 716.33;
		t.x = 116.85;
		t.y = 1375.43;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 316.83;
		t.x = 813.34;
		t.y = 1375.95;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 85;
		t.x = 816;
		t.y = 1057.96;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l64.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e1","s1","s3","s2","e2","s0","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._SingleTerrainPos1_i(),this.e1_i(),this.s1_i(),this.s3_i(),this.s2_i(),this.e2_i(),this.s0_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this._BoomBoxPos3_i(),this._IronBoxPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 764.42;
		t.y = 576.62;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 190.42;
		t.width = 205.58;
		t.x = 694.42;
		t.y = 575.1;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 214.5;
		t.y = 1222;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.height = 20;
		t.width = 200;
		t.x = 502;
		t.y = 326;
		return t;
	};
	_proto.s3_i = function () {
		var t = new StaticWoodStripPos();
		this.s3 = t;
		t.height = 20;
		t.width = 253;
		t.x = 134;
		t.y = 455.1;
		return t;
	};
	_proto.s2_i = function () {
		var t = new StaticWoodStripPos();
		this.s2 = t;
		t.height = 20;
		t.width = 257;
		t.x = 136;
		t.y = 1222;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 329;
		t.y = 1222;
		return t;
	};
	_proto.s0_i = function () {
		var t = new StaticWoodStripPos();
		this.s0 = t;
		t.height = 20;
		t.width = 261;
		t.x = 134;
		t.y = 794;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 138.5;
		t.y = 674.1;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 274;
		t.y = 674.1;
		return t;
	};
	_proto._BoomBoxPos3_i = function () {
		var t = new BoomBoxPos();
		t.height = 80;
		t.width = 80;
		t.x = 562;
		t.y = 240;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 200;
		t.width = 200;
		t.x = 542;
		t.y = 1080;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 220.5;
		t.y = 375.1;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1252;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 120;
		t.y = 1431.52;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1205;
		t.x = 400;
		t.y = 1431.52;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 400;
		t.y = 220;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1076;
		t.x = 500;
		t.y = 225.1;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 395;
		t.x = 500;
		t.y = 1280;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l65.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e2","e1","e0","s1","s3","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.e2_i(),this.e1_i(),this.e0_i(),this._PlayerPos1_i(),this.s1_i(),this._BoomBoxPos1_i(),this.s3_i(),this._IronBallPos1_i(),this._SingleTerrainPos1_i(),this._StaticThornPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 220.5;
		t.y = 1281.52;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 678;
		t.y = 200;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 572;
		t.y = 1108;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 460;
		t.y = 846.52;
		return t;
	};
	_proto.s1_i = function () {
		var t = new StaticWoodStripPos();
		this.s1 = t;
		t.height = 20;
		t.width = 200;
		t.x = 522;
		t.y = 1108;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 80;
		t.width = 80;
		t.x = 648;
		t.y = 1028;
		return t;
	};
	_proto.s3_i = function () {
		var t = new StaticWoodStripPos();
		this.s3 = t;
		t.height = 20;
		t.width = 348;
		t.x = 348;
		t.y = 200;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 325;
		t.y = 50;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 170;
		t.x = 439;
		t.y = 219.48;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.height = 55;
		t.rotation = 270;
		t.width = 200;
		t.x = 348;
		t.y = 1264.02;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 120;
		t.y = 1281.52;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 435;
		t.x = 400;
		t.y = 1281.52;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 402;
		t.y = 846.52;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 454;
		t.x = 500;
		t.y = 846.52;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 274;
		t.x = 500;
		t.y = 1280;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 754.42;
		t.y = 1280;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 144;
		t.x = 754.42;
		t.y = 178.48;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l66.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._StaticWoodStripPos1_i(),this._StaticWoodStripPos2_i(),this._StaticWoodStripPos3_i(),this._StaticWoodStripPos4_i(),this._StaticWoodStripPos5_i(),this._StaticWoodStripPos6_i(),this._EnemyPos1_i(),this._EnemyPos2_i(),this._ThornPos1_i(),this._ThornPos2_i(),this._BoomBoxPos1_i(),this._BoomBoxPos2_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 449;
		t.y = 1051.91;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 255;
		t.x = 104;
		t.y = 236;
		return t;
	};
	_proto._StaticWoodStripPos2_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 255;
		t.x = 580;
		t.y = 236;
		return t;
	};
	_proto._StaticWoodStripPos3_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 255;
		t.x = 104;
		t.y = 506;
		return t;
	};
	_proto._StaticWoodStripPos4_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 255;
		t.x = 580;
		t.y = 506;
		return t;
	};
	_proto._StaticWoodStripPos5_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 165;
		t.x = 115;
		t.y = 983.41;
		return t;
	};
	_proto._StaticWoodStripPos6_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 165;
		t.x = 600;
		t.y = 998.41;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 682.5;
		t.y = 1280;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 197.5;
		t.y = 1280;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 270;
		t.width = 60;
		t.x = 652.5;
		t.y = 234;
		return t;
	};
	_proto._ThornPos2_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 90;
		t.width = 60;
		t.x = 247.5;
		t.y = 176;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 60;
		t.width = 60;
		t.x = 137.5;
		t.y = 446;
		return t;
	};
	_proto._BoomBoxPos2_i = function () {
		var t = new BoomBoxPos();
		t.height = 60;
		t.width = 60;
		t.x = 750;
		t.y = 446;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -2;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 0;
		t.y = 1280;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 350;
		t.x = 280;
		t.y = 1280;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 71;
		t.x = 280;
		t.y = 910;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 160;
		t.x = 351;
		t.y = 910;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 349;
		t.y = 1051.91;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 137;
		t.x = 529;
		t.y = 1051.91;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 51;
		t.x = 529;
		t.y = 910;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 390;
		t.x = 600;
		t.y = 910;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 300;
		t.x = 600;
		t.y = 1280;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l67.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy0","enemy1","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._StaticThornPos1_i(),this._StaticThornPos2_i(),this.enemy0_i(),this.enemy1_i(),this._BoomBoxPos1_i(),this._PlayerPos1_i(),this._StaticWoodStripPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 55;
		t.rotation = 90;
		t.width = 322.67;
		t.x = 183.12;
		t.y = 1015.44;
		return t;
	};
	_proto._StaticThornPos2_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.height = 55;
		t.rotation = 270;
		t.width = 322.67;
		t.x = 645;
		t.y = 1331.34;
		return t;
	};
	_proto.enemy0_i = function () {
		var t = new EnemyPos();
		this.enemy0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 560;
		t.y = 1350;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 277.28;
		t.y = 1350;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 362.24;
		t.y = 108;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 746;
		t.y = 667.77;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 219;
		t.x = 312.74;
		t.y = 228;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = 2;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 278;
		t.x = 0;
		t.y = 667.77;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 317;
		t.x = 287.28;
		t.y = 667.77;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 182;
		t.x = 287.24;
		t.y = 984.77;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 384;
		t.x = 125.24;
		t.y = 984.77;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 594;
		t.x = 125.24;
		t.y = 1350;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 385;
		t.x = 700;
		t.y = 1350;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 984.77;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 305.33;
		t.x = 500;
		t.y = 984.77;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 500;
		t.y = 671.44;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l68.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._BoomBoxPos1_i(),this._PlayerPos1_i(),this._ThornPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 500;
		t.y = 455.17;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 681.68;
		t.y = 1277.15;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 190.76;
		t.y = 1177.15;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 830;
		t.y = 455.17;
		return t;
	};
	_proto._ThornPos1_i = function () {
		var t = new ThornPos();
		t.height = 55;
		t.rotation = 90;
		t.width = 175;
		t.x = 391.68;
		t.y = 1102.82;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 358.74;
		t.y = 376.69;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 196.3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1101;
		t.x = 120;
		t.y = 197.39;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 680;
		t.x = 120;
		t.y = 1278.67;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 725;
		t.x = 780;
		t.y = 1279.34;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 435;
		t.x = 780.03;
		t.y = 574.69;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 118;
		t.x = 344.18;
		t.y = 574.69;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 555;
		t.x = 354.18;
		t.y = 456.69;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l69.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e2","e0","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.e2_i(),this.e0_i(),this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._SingleTerrainPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 641;
		t.y = 357.87;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 508;
		t.y = 356.96;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 224.15;
		t.y = 1278;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 150;
		t.width = 150;
		t.x = 201.15;
		t.y = 206.96;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65.76;
		t.width = 406.85;
		t.x = 254.15;
		t.y = 358.87;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -1.52;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 655;
		t.x = 120;
		t.y = 1281;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 754.42;
		t.y = 1280;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 144;
		t.x = 754.42;
		t.y = 178.48;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l7.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._PlayerPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 590;
		t.y = 1271;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.width = 100;
		t.x = 715;
		t.y = 1271;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 176;
		t.y = 791;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 367;
		t.y = 642;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 0;
		t.y = 792;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 500;
		t.x = 500;
		t.y = 792;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 300;
		t.x = 500;
		t.y = 1271;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 480;
		t.x = 780;
		t.y = 1271;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrain";
		t.width = 120;
		t.x = 780;
		t.y = 792;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l70.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e2","e1","e0","s0","s2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.e2_i(),this.e1_i(),this.e0_i(),this._PlayerPos1_i(),this._BoomBoxPos1_i(),this.s0_i(),this.s2_i(),this._StaticWoodStripPos1_i(),this._StaticIronStripPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 677.42;
		t.y = 817.48;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 421.5;
		t.y = 637.48;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 190;
		t.y = 565.48;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 450;
		t.y = 1277.48;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.width = 70;
		t.x = 517.5;
		t.y = 150.96;
		return t;
	};
	_proto.s0_i = function () {
		var t = new StaticWoodStripPos();
		this.s0 = t;
		t.height = 20;
		t.width = 140;
		t.x = 120;
		t.y = 568;
		return t;
	};
	_proto.s2_i = function () {
		var t = new StaticWoodStripPos();
		this.s2 = t;
		t.height = 20;
		t.width = 158;
		t.x = 594.42;
		t.y = 820;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.width = 250;
		t.x = 497.5;
		t.y = 220;
		return t;
	};
	_proto._StaticIronStripPos1_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.width = 140;
		t.x = 351.5;
		t.y = 640;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -2.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 655;
		t.x = 120;
		t.y = 1281;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 754.42;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 144;
		t.x = 754.42;
		t.y = 178.48;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l71.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._StaticWoodStripPos1_i(),this._EnemyPos1_i(),this._IronStripPos1_i(),this._IronBallPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 98;
		t.y = 487.42;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 30;
		t.width = 166;
		t.x = 580;
		t.y = 143.87;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy10";
		t.height = 180;
		t.hp = 1;
		t.scaleX = 1;
		t.width = 100;
		t.x = 269.96;
		t.y = 1061.48;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.height = 20;
		t.width = 320;
		t.x = 420;
		t.y = 123.87;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 150;
		t.width = 150;
		t.x = 223;
		t.y = 337.42;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -2;
		t.y = -1.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 193;
		t.x = 0;
		t.y = 1280;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 197;
		t.x = 172.42;
		t.y = 1280;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 301;
		t.x = 172.42;
		t.y = 1063;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 233;
		t.x = 480;
		t.y = 1067;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 228;
		t.x = 480;
		t.y = 1280;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 345;
		t.x = 688;
		t.y = 1281;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 79;
		t.x = 688;
		t.y = 936;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 931;
		t.x = 747;
		t.y = 936;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 159;
		t.x = 747;
		t.y = 5;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 398;
		t.x = 0;
		t.y = 487.42;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l72.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e2","s2","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.e2_i(),this._PlayerPos1_i(),this.s2_i(),this._StaticIronStripPos1_i(),this._StaticIronStripPos2_i(),this._BoomBoxPos1_i(),this._IronBallPos1_i(),this.terrain_i(),this._StaticWoodStripPos1_i()];
	}
	var _proto = l0.prototype;

	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 673.42;
		t.y = 678;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 190;
		t.y = 1277.48;
		return t;
	};
	_proto.s2_i = function () {
		var t = new StaticWoodStripPos();
		this.s2 = t;
		t.height = 20;
		t.width = 158;
		t.x = 594.42;
		t.y = 680.61;
		return t;
	};
	_proto._StaticIronStripPos1_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.rotation = 14.93;
		t.width = 203;
		t.x = 125.15;
		t.y = 924.67;
		return t;
	};
	_proto._StaticIronStripPos2_i = function () {
		var t = new StaticIronStripPos();
		t.height = 20;
		t.rotation = 14.93;
		t.width = 401;
		t.x = 355.15;
		t.y = 994.19;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 634.42;
		t.y = 1157.48;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 100;
		t.width = 100;
		t.x = 120;
		t.y = 824.67;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -2.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 655;
		t.x = 120;
		t.y = 1281;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 754.42;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 144;
		t.x = 754.42;
		t.y = 178.48;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 90;
		t.width = 267;
		t.x = 344;
		t.y = 824.67;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l73.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["w0","terrain","e2","e0"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._IronBallPos1_i(),this._IronStripPos1_i(),this.w0_i(),this._SpinIronStripPos1_i(),this._IronBallPos2_i(),this._BoomBoxPos1_i(),this.terrain_i(),this.e2_i(),this.e0_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 94.5;
		t.y = 1278.48;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 443.5;
		t.y = 815.52;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.width = 488;
		t.x = 558.56;
		t.y = 406.48;
		return t;
	};
	_proto.w0_i = function () {
		var t = new WoodStripPos();
		this.w0 = t;
		t.height = 20;
		t.width = 250;
		t.x = 521.5;
		t.y = 384.96;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.height = 20;
		t.nailX = 287;
		t.nailY = 10;
		t.width = 287;
		t.x = 97.92;
		t.y = 258.46;
		return t;
	};
	_proto._IronBallPos2_i = function () {
		var t = new IronBallPos();
		t.height = 120;
		t.width = 120;
		t.x = 250.42;
		t.y = 135.46;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 205.36;
		t.y = 939.36;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.x = -2;
		t.y = -3.04;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 193;
		t.x = 0;
		t.y = 1280;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 197;
		t.x = 172.42;
		t.y = 1280;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 138;
		t.x = 172.42;
		t.y = 1063;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 233;
		t.x = 330.42;
		t.y = 1063;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 120;
		t.x = 329.92;
		t.y = 1276;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 448.96;
		t.y = 1296;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 143;
		t.x = 452;
		t.y = 896;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 398;
		t.x = 596.56;
		t.y = 897.52;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 173;
		t.x = 595.88;
		t.y = 1276;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 868;
		t.x = 748;
		t.y = 1276;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 177;
		t.x = 750.88;
		t.y = 408;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 387.92;
		t.y = 1272.15;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 646.5;
		t.y = 384.96;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.width = 184;
		t.x = 194;
		t.y = 279.42;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l74.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain","e0"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._PlayerPos1_i(),this._BoomBoxPos1_i(),this._StaticWoodStripPos1_i(),this._IronBallPos1_i(),this._IronBoxPos1_i(),this.terrain_i(),this.e0_i(),this._SingleTerrainPos1_i(),this._StaticThornPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 193.57;
		t.y = 611.71;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 120;
		t.width = 120;
		t.x = 122.42;
		t.y = 1157.48;
		return t;
	};
	_proto._StaticWoodStripPos1_i = function () {
		var t = new StaticWoodStripPos();
		t.height = 20;
		t.rotation = 37.6;
		t.width = 199;
		t.x = 478.29;
		t.y = 432.1;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120;
		t.rotation = 311.24;
		t.width = 120;
		t.x = 551.02;
		t.y = 473.39;
		return t;
	};
	_proto._IronBoxPos1_i = function () {
		var t = new IronBoxPos();
		t.height = 130;
		t.width = 130;
		t.x = 350.42;
		t.y = 1148.88;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -4.71;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 655;
		t.x = 120;
		t.y = 1281;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 311;
		t.x = 754.42;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 359;
		t.x = 754.42;
		t.y = 989.48;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 144;
		t.x = 395.42;
		t.y = 969.48;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 311.25;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 597;
		t.x = 393.42;
		t.y = 832;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 113;
		t.x = 790;
		t.y = 383.16;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 585.95;
		t.y = 1275.29;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122.06;
		t.width = 184;
		t.x = 101.57;
		t.y = 611.71;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._StaticThornPos1_i = function () {
		var t = new StaticThornPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.rotation = 269.34;
		t.width = 150;
		t.x = 693.72;
		t.y = 1217.48;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l75.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["e2","e0","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.e2_i(),this.e0_i(),this._PlayerPos1_i(),this._SpinIronStripPos1_i(),this._IronBallPos1_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 572.29;
		t.y = 770.46;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 222;
		t.y = 1275.48;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 738.9;
		t.y = 1275.48;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.anchorOffsetX = 0;
		t.height = 35;
		t.nailX = 20;
		t.nailY = 20;
		t.width = 220;
		t.x = 678.9;
		t.y = 776.48;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 284.6;
		t.y = 693.98;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 60;
		t.width = 60;
		t.x = 413.36;
		t.y = 705.36;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -3.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 204;
		t.x = 120;
		t.y = 1280;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 270.05;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 506;
		t.x = 304.16;
		t.y = 1279.98;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 290;
		t.x = 304.16;
		t.y = 773.98;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 123;
		t.x = 593.29;
		t.y = 773.98;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 176;
		t.x = 592.9;
		t.y = 902.47;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 396;
		t.x = 436.9;
		t.y = 903;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 460;
		t.x = 435.9;
		t.y = 1279;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l76.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain","e2","e0","e1"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.terrain_i(),this.e2_i(),this.e0_i(),this._PlayerPos1_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SpinIronStripPos1_i(),this.e1_i(),this._SingleTerrainPos3_i(),this._SpinIronStripPos2_i()];
	}
	var _proto = l0.prototype;

	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.y = -2.52;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 100;
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 120;
		t.y = 200;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 655;
		t.x = 120;
		t.y = 1281;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1100;
		t.x = 754.42;
		t.y = 1280;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 144;
		t.x = 754.42;
		t.y = 178.48;
		return t;
	};
	_proto.e2_i = function () {
		var t = new EnemyPos();
		this.e2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 362.33;
		t.y = 410.8;
		return t;
	};
	_proto.e0_i = function () {
		var t = new EnemyPos();
		this.e0 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 458.42;
		t.y = 760.26;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 198;
		t.y = 412.32;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.width = 339;
		t.x = 100;
		t.y = 414.26;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.width = 386;
		t.x = 388.42;
		t.y = 760.26;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.nailX = 108;
		t.nailY = 105;
		t.rotation = 270;
		t.width = 214;
		t.x = 460.17;
		t.y = 462.6;
		return t;
	};
	_proto.e1_i = function () {
		var t = new EnemyPos();
		this.e1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 412;
		t.y = 1055.26;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.width = 382;
		t.x = 100;
		t.y = 1055.26;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SpinIronStripPos2_i = function () {
		var t = new SpinIronStripPos();
		t.height = 29;
		t.nailX = 106;
		t.nailY = 105;
		t.rotation = 270;
		t.width = 214;
		t.x = 341.33;
		t.y = 810;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l77.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._PlayerPos1_i(),this._LinePos1_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 332.42;
		t.y = 1456.17;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 614.42;
		t.y = 1466.17;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 143.94;
		t.y = 416.02;
		return t;
	};
	_proto._LinePos1_i = function () {
		var t = new LinePos();
		t.downHeight = 200;
		t.downRotation = 40;
		t.downType = 1;
		t.downWidth = 200;
		t.height = 580;
		t.topHeight = 200;
		t.topType = 0;
		t.topWidth = 200;
		t.width = 20;
		t.x = 450;
		t.y = 336;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 416;
		t.x = 0;
		t.y = 1454;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 45;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 75;
		t.x = 420;
		t.y = 1454;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -45;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 73;
		t.x = 473.03;
		t.y = 1507.03;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 374;
		t.x = 527;
		t.y = 1454;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 310;
		t.width = 900;
		t.x = 0;
		t.y = 420;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l78.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._PlayerPos1_i(),this._LinePos1_i(),this._BoomBoxPos1_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i(),this._SingleTerrainPos4_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 373;
		t.y = 1426.73;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 373;
		t.y = 874.5;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 737.88;
		t.y = 1426.73;
		return t;
	};
	_proto._LinePos1_i = function () {
		var t = new LinePos();
		t.downHeight = 200;
		t.downType = 2;
		t.downWidth = 200;
		t.height = 492;
		t.topHeight = 90;
		t.topType = 1;
		t.topWidth = 90;
		t.width = 20;
		t.x = 546;
		t.y = 217;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.Bodytype = 2;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125.33;
		t.width = 89.34;
		t.x = 703.81;
		t.y = 709;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 891;
		t.x = 0;
		t.y = 1426.73;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 192;
		t.width = 568;
		t.x = 0;
		t.y = 874.5;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 192;
		t.width = 508;
		t.y = 188;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 192;
		t.width = 297;
		t.x = 601.7;
		t.y = 188;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos4_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 101;
		t.width = 126;
		t.x = 491.65;
		t.y = 280.37;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l79.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy1","enemy2","woodStrip","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this.enemy1_i(),this.enemy2_i(),this._PlayerPos1_i(),this._LinePos1_i(),this._SpinIronStripPos1_i(),this._StaticWoodBoxPos1_i(),this.woodStrip_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 292.42;
		t.y = 1448.17;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 174.42;
		t.y = 1446.17;
		return t;
	};
	_proto.enemy1_i = function () {
		var t = new EnemyPos();
		this.enemy1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 500.42;
		t.y = 845.26;
		return t;
	};
	_proto.enemy2_i = function () {
		var t = new EnemyPos();
		this.enemy2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 630.42;
		t.y = 847.26;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 743.94;
		t.y = 1456.02;
		return t;
	};
	_proto._LinePos1_i = function () {
		var t = new LinePos();
		t.downHeight = 100;
		t.downRotation = 0;
		t.downType = 13;
		t.downWidth = 100;
		t.height = 379;
		t.topHeight = 150;
		t.topType = 2;
		t.topWidth = 150;
		t.width = 20;
		t.x = 762.1;
		t.y = 210.21;
		return t;
	};
	_proto._SpinIronStripPos1_i = function () {
		var t = new SpinIronStripPos();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.nailX = 230;
		t.nailY = 10;
		t.width = 239;
		t.x = 140.83;
		t.y = 513.11;
		return t;
	};
	_proto._StaticWoodBoxPos1_i = function () {
		var t = new StaticWoodBoxPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.width = 78;
		t.x = 83.01;
		t.y = 533.01;
		return t;
	};
	_proto.woodStrip_i = function () {
		var t = new StaticWoodStripPos();
		this.woodStrip = t;
		t.height = 20;
		t.width = 259;
		t.x = 433;
		t.y = 849;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 84;
		t.x = 0;
		t.y = 230;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 1221;
		t.x = 84;
		t.y = 230;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 295;
		t.x = 84;
		t.y = 1450;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 94;
		t.x = 371.82;
		t.y = 1470;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 72;
		t.x = 373.03;
		t.y = 1356;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 114;
		t.x = 461.21;
		t.y = 1356;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 373;
		t.x = 460;
		t.y = 1450;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 943;
		t.x = 825.94;
		t.y = 1457.94;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 451;
		t.x = 832;
		t.y = 534;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 96;
		t.x = 382;
		t.y = 516;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -15;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 545;
		t.x = 383.92;
		t.y = 419.72;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 20;
		t.x = 896.71;
		t.y = 285.16;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l8.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._PlayerPos1_i(),this._EnemyPos2_i(),this._BoomBoxPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 608;
		t.y = 1001.64;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 96;
		t.y = 1001.64;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 800;
		t.y = 601.64;
		return t;
	};
	_proto._BoomBoxPos1_i = function () {
		var t = new BoomBoxPos();
		t.height = 100;
		t.width = 100;
		t.x = 400;
		t.y = 901.64;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 700;
		t.x = 0;
		t.y = 1001.64;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 270;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 400;
		t.x = 700;
		t.y = 1001.64;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 200;
		t.x = 700;
		t.y = 601.64;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l80.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["enemy","line","terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.enemy_i(),this._EnemyPos1_i(),this._PlayerPos1_i(),this.line_i(),this.terrain_i(),this._SingleTerrainPos1_i()];
	}
	var _proto = l0.prototype;

	_proto.enemy_i = function () {
		var t = new EnemyPos();
		this.enemy = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 225.65;
		t.y = 533.44;
		return t;
	};
	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 522;
		t.y = 1476;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 709.1;
		t.y = 685;
		return t;
	};
	_proto.line_i = function () {
		var t = new LinePos();
		this.line = t;
		t.downHeight = 200;
		t.downRotation = 0;
		t.downType = 2;
		t.downWidth = 200;
		t.height = 379;
		t.topHeight = 150;
		t.topType = 0;
		t.topWidth = 150;
		t.width = 20;
		t.x = 215.65;
		t.y = 598.44;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 107;
		t.x = 0;
		t.y = 1266;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 30;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 422;
		t.x = 107.92;
		t.y = 1267.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 367;
		t.x = 465;
		t.y = 1477;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 731;
		t.x = 831;
		t.y = 1496;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 52;
		t.x = 846;
		t.y = 764.96;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.64;
		t.width = 903.06;
		t.x = -4.36;
		t.y = 680.45;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l81.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._PlayerPos1_i(),this._LinePos1_i(),this._LinePos2_i(),this.terrain_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 185.65;
		t.y = 1475.44;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = -1;
		t.width = 100;
		t.x = 642;
		t.y = 1472;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.width = 100;
		t.x = 116;
		t.y = 348;
		return t;
	};
	_proto._LinePos1_i = function () {
		var t = new LinePos();
		t.downHeight = 100;
		t.downRotation = 0;
		t.downType = 2;
		t.downWidth = 100;
		t.height = 379;
		t.topHeight = 100;
		t.topType = 0;
		t.topWidth = 100;
		t.width = 20;
		t.x = 295;
		t.y = 288;
		return t;
	};
	_proto._LinePos2_i = function () {
		var t = new LinePos();
		t.downHeight = 100;
		t.downRotation = 0;
		t.downType = 2;
		t.downWidth = 100;
		t.height = 379;
		t.topHeight = 200;
		t.topType = 0;
		t.topWidth = 200;
		t.width = 20;
		t.x = 531;
		t.y = 266;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 107;
		t.x = 0;
		t.y = 811;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 678;
		t.x = 126;
		t.y = 811;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 180;
		t.x = 105;
		t.y = 1477;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 559;
		t.x = 282;
		t.y = 1497;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -30;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 109;
		t.x = 282;
		t.y = 936;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 109;
		t.x = 372;
		t.y = 883;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 30;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 109;
		t.x = 478;
		t.y = 882;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 559;
		t.x = 571;
		t.y = 935;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 180;
		t.x = 570;
		t.y = 1474;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = -90;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 678;
		t.x = 742;
		t.y = 1495;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 150;
		t.x = 744;
		t.y = 818;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.width = 287;
		t.y = 346;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.width = 336;
		t.x = 564;
		t.y = 346;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 145;
		t.width = 195;
		t.x = 324;
		t.y = 348;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/level/l9.exml'] = window.l0 = (function (_super) {
	__extends(l0, _super);
	function l0() {
		_super.call(this);
		this.skinParts = ["terrain"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._EnemyPos1_i(),this._EnemyPos2_i(),this._PlayerPos1_i(),this._SingleTerrainPos1_i(),this._SingleTerrainPos2_i(),this._SingleTerrainPos3_i(),this._IronStripPos1_i(),this._IronBallPos1_i(),this.terrain_i()];
	}
	var _proto = l0.prototype;

	_proto._EnemyPos1_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 628.19;
		t.y = 828;
		return t;
	};
	_proto._EnemyPos2_i = function () {
		var t = new EnemyPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 180;
		t.bodyRes = "enemy01";
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 467;
		t.y = 533;
		return t;
	};
	_proto._PlayerPos1_i = function () {
		var t = new PlayerPos();
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 200;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 111.15;
		t.y = 1200;
		return t;
	};
	_proto._SingleTerrainPos1_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 588.63;
		t.y = 830;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos2_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 281;
		t.x = 330;
		t.y = 535;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._SingleTerrainPos3_i = function () {
		var t = new SingleTerrainPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.width = 80;
		t.x = 201.66;
		t.y = 179;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "terrainbg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 20;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.percentWidth = 100;
		t.x = 10;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(1,1,10,10);
		t.source = "terrain";
		t.top = 0;
		t.width = 20;
		return t;
	};
	_proto._IronStripPos1_i = function () {
		var t = new IronStripPos();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.width = 260;
		t.x = 110;
		t.y = 159;
		return t;
	};
	_proto._IronBallPos1_i = function () {
		var t = new IronBallPos();
		t.height = 80;
		t.width = 80;
		t.x = 200;
		t.y = 78;
		return t;
	};
	_proto.terrain_i = function () {
		var t = new TerrainObj();
		this.terrain = t;
		t.height = 1600;
		t.width = 900;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 20;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(6,5,1,1);
		t.source = "terrain";
		t.width = 900;
		t.x = 0;
		t.y = 1200;
		return t;
	};
	return l0;
})(eui.Skin);generateEUI.paths['resource/ui/game/gamefail.exml'] = window.gamepause = (function (_super) {
	__extends(gamepause, _super);
	var gamepause$Skin1 = 	(function (_super) {
		__extends(gamepause$Skin1, _super);
		function gamepause$Skin1() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamepause$Skin1.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 140;
			t.scale9Grid = new egret.Rectangle(19,28,12,47);
			t.source = "Tipsbtn";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 50;
			t.text = "跳过此关";
			t.textColor = 0x0b61c4;
			t.x = 100;
			t.y = 40;
			return t;
		};
		return gamepause$Skin1;
	})(eui.Skin);

	var gamepause$Skin2 = 	(function (_super) {
		__extends(gamepause$Skin2, _super);
		function gamepause$Skin2() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i(),this._Image2_i(),this._Label2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamepause$Skin2.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 140;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 50;
			t.text = "重新开始";
			t.textColor = 0x993300;
			t.x = 40;
			t.y = 40;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 76;
			t.source = "energy";
			t.width = 46;
			t.x = 260;
			t.y = 35;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.height = 38;
			t.size = 35;
			t.text = "-1";
			t.width = 58;
			t.x = 320;
			t.y = 50;
			return t;
		};
		return gamepause$Skin2;
	})(eui.Skin);

	function gamepause() {
		_super.call(this);
		this.skinParts = ["labelReturn","btnSkip","btnReplay","share"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.labelReturn_i(),this.btnSkip_i(),this.btnReplay_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this.share_i()];
		this.states = [
			new eui.State ("tt",
				[
				])
			,
			new eui.State ("wxgame",
				[
				])
			,
			new eui.State ("qq",
				[
				])
		];
	}
	var _proto = gamepause.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.percentHeight = 100;
		t.left = -1;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.top = -1;
		t.percentWidth = 100;
		return t;
	};
	_proto.labelReturn_i = function () {
		var t = new eui.Label();
		this.labelReturn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 136;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = -172;
		t.size = 32;
		t.text = "返回主界面";
		t.textAlign = "center";
		t.textColor = 0x818181;
		t.verticalAlign = "middle";
		t.width = 278;
		return t;
	};
	_proto.btnSkip_i = function () {
		var t = new ScalerButton();
		this.btnSkip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 390;
		t.height = 140;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 400;
		t.skinName = gamepause$Skin1;
		return t;
	};
	_proto.btnReplay_i = function () {
		var t = new ScalerButton();
		this.btnReplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 214;
		t.height = 140;
		t.horizontalCenter = 0;
		t.width = 400;
		t.skinName = gamepause$Skin2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 260;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(7,17,9,136);
		t.source = "titleBg";
		t.width = 900;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 87;
		t.horizontalCenter = 0;
		t.size = 85;
		t.text = "游戏失败";
		t.textAlign = "center";
		t.top = 120;
		t.width = 400;
		t.y = 110;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.width = 600;
		t.x = 149;
		t.y = 406.97;
		return t;
	};
	_proto.share_i = function () {
		var t = new eui.Group();
		this.share = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 131;
		t.height = 71;
		t.horizontalCenter = 153;
		t.width = 226;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.source = "share";
		t.width = 49;
		t.x = 11;
		t.y = 11.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "请求帮助";
		t.textColor = 0x818181;
		t.x = 78;
		t.y = 19.5;
		return t;
	};
	return gamepause;
})(eui.Skin);generateEUI.paths['resource/ui/game/gamepause.exml'] = window.gamepause = (function (_super) {
	__extends(gamepause, _super);
	var gamepause$Skin3 = 	(function (_super) {
		__extends(gamepause$Skin3, _super);
		function gamepause$Skin3() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamepause$Skin3.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 140;
			t.scale9Grid = new egret.Rectangle(19,28,12,47);
			t.source = "Tipsbtn";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 50;
			t.text = "回主界面";
			t.textColor = 0x0b61c4;
			t.x = 100;
			t.y = 40;
			return t;
		};
		return gamepause$Skin3;
	})(eui.Skin);

	var gamepause$Skin4 = 	(function (_super) {
		__extends(gamepause$Skin4, _super);
		function gamepause$Skin4() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamepause$Skin4.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 140;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 50;
			t.text = "继续游戏";
			t.textColor = 0x993300;
			t.x = 100;
			t.y = 40;
			return t;
		};
		return gamepause$Skin4;
	})(eui.Skin);

	function gamepause() {
		_super.call(this);
		this.skinParts = ["btnReturn","btnContinue"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.btnReturn_i(),this.btnContinue_i(),this._Image2_i(),this._Label1_i()];
		this.states = [
			new eui.State ("tt",
				[
				])
			,
			new eui.State ("wxgame",
				[
				])
			,
			new eui.State ("qq",
				[
				])
		];
	}
	var _proto = gamepause.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.percentHeight = 100;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.btnReturn_i = function () {
		var t = new ScalerButton();
		this.btnReturn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 400;
		t.x = 250;
		t.y = 1072;
		t.skinName = gamepause$Skin3;
		return t;
	};
	_proto.btnContinue_i = function () {
		var t = new ScalerButton();
		this.btnContinue = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 400;
		t.x = 250;
		t.y = 1260;
		t.skinName = gamepause$Skin4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 261;
		t.scale9Grid = new egret.Rectangle(7,17,9,136);
		t.source = "titleBg";
		t.width = 900;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 87;
		t.horizontalCenter = 0;
		t.size = 85;
		t.text = "暂停";
		t.textAlign = "center";
		t.top = 120;
		t.width = 400;
		t.y = 160;
		return t;
	};
	return gamepause;
})(eui.Skin);generateEUI.paths['resource/ui/game/gameplay.exml'] = window.gameplay = (function (_super) {
	__extends(gameplay, _super);
	var gameplay$Skin5 = 	(function (_super) {
		__extends(gameplay$Skin5, _super);
		function gameplay$Skin5() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameplay$Skin5.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 98;
			t.source = "p_pause";
			t.width = 100;
			return t;
		};
		return gameplay$Skin5;
	})(eui.Skin);

	var gameplay$Skin6 = 	(function (_super) {
		__extends(gameplay$Skin6, _super);
		function gameplay$Skin6() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameplay$Skin6.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 98;
			t.source = "p_replay";
			t.width = 100;
			return t;
		};
		return gameplay$Skin6;
	})(eui.Skin);

	function gameplay() {
		_super.call(this);
		this.skinParts = ["btnPause","btnReplay","labelLevel","rect","grpBullet"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.btnPause_i(),this.btnReplay_i(),this.labelLevel_i(),this.grpBullet_i()];
		this.states = [
			new eui.State ("wxgame",
				[
				])
			,
			new eui.State ("tt",
				[
				])
		];
	}
	var _proto = gameplay.prototype;

	_proto.btnPause_i = function () {
		var t = new ScalerButton();
		this.btnPause = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.left = 42;
		t.top = 200;
		t.width = 100;
		t.skinName = gameplay$Skin5;
		return t;
	};
	_proto.btnReplay_i = function () {
		var t = new ScalerButton();
		this.btnReplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.right = 42;
		t.top = 199;
		t.width = 100;
		t.skinName = gameplay$Skin6;
		return t;
	};
	_proto.labelLevel_i = function () {
		var t = new eui.Label();
		this.labelLevel = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "LEVEL 1";
		t.top = 210;
		return t;
	};
	_proto.grpBullet_i = function () {
		var t = new eui.Group();
		this.grpBullet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 300;
		t.height = 502;
		t.width = 108;
		t.x = 44;
		t.y = 508;
		t.elementsContent = [this.rect_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Image();
		this.rect = t;
		t.alpha = 0.5;
		t.anchorOffsetY = 0;
		t.bottom = 3;
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = -1;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.name = "b7";
		t.source = "bullet";
		t.y = 10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.name = "b6";
		t.source = "bullet";
		t.y = 80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.name = "b5";
		t.source = "bullet";
		t.y = 150;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.name = "b4";
		t.source = "bullet";
		t.y = 220;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.name = "b3";
		t.source = "bullet";
		t.y = 290;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -0.5;
		t.name = "b2";
		t.source = "bullet";
		t.y = 360;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.name = "b1";
		t.source = "bullet";
		t.y = 430;
		return t;
	};
	return gameplay;
})(eui.Skin);generateEUI.paths['resource/ui/game/gameshare.exml'] = window.gameshare = (function (_super) {
	__extends(gameshare, _super);
	var gameshare$Skin7 = 	(function (_super) {
		__extends(gameshare$Skin7, _super);
		function gameshare$Skin7() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gameshare$Skin7.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 140;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 400;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 50;
			t.text = "分享录屏";
			t.textColor = 0x993300;
			t.verticalCenter = 0;
			return t;
		};
		return gameshare$Skin7;
	})(eui.Skin);

	function gameshare() {
		_super.call(this);
		this.skinParts = ["btn_share","btn_qx","g_btn_share"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("win",
				[
					new eui.SetProperty("_Label2","text","+300")
				])
			,
			new eui.State ("fail",
				[
					new eui.SetProperty("_Image5","source","ui_json.share_6"),
					new eui.SetProperty("_Image7","source","ui_json.share_8")
				])
		];
	}
	var _proto = gameshare.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.percentHeight = 100;
		t.left = -1;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.top = -1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 24;
		t.verticalCenter = -160;
		t.elementsContent = [this.btn_share_i(),this.btn_qx_i(),this._Image2_i(),this.g_btn_share_i()];
		return t;
	};
	_proto.btn_share_i = function () {
		var t = new ScalerButton();
		this.btn_share = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.width = 400;
		t.x = 87;
		t.y = 886;
		t.skinName = gameshare$Skin7;
		return t;
	};
	_proto.btn_qx_i = function () {
		var t = new eui.Label();
		this.btn_qx = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "不了, 谢谢";
		t.x = 196;
		t.y = 1078;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 3;
		t.scaleY = 3;
		t.source = "ui_json.share_3";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto.g_btn_share_i = function () {
		var t = new eui.Group();
		this.g_btn_share = t;
		t.touchChildren = false;
		t.x = 0;
		t.y = 134;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "ui_json.share_4";
		t.x = 24;
		t.y = 118;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 618;
		t.scale9Grid = new egret.Rectangle(43,122,21,21);
		t.source = "ui_json.share_1";
		t.width = 609;
		t.x = 0;
		t.y = 84;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.source = "ui_json.share_5";
		t.x = 158;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "ui_json.share_2";
		t.x = 222;
		t.y = 236;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.rotation = -15;
		t.source = "ui_json.share_7";
		t.x = 270;
		t.y = 620;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "ui_json.money";
		t.x = 9;
		t.y = 620;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "点击播放";
		t.x = 236;
		t.y = 423;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 35;
		t.text = "+200";
		t.textColor = 0x000000;
		t.x = 106;
		t.y = 645;
		return t;
	};
	return gameshare;
})(eui.Skin);generateEUI.paths['resource/ui/game/gamesuccess.exml'] = window.gamesuccess = (function (_super) {
	__extends(gamesuccess, _super);
	var gamesuccess$Skin8 = 	(function (_super) {
		__extends(gamesuccess$Skin8, _super);
		function gamesuccess$Skin8() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamesuccess$Skin8.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 40;
			t.text = "返回主菜单";
			t.textColor = 0x993300;
			t.verticalCenter = 0;
			return t;
		};
		return gamesuccess$Skin8;
	})(eui.Skin);

	var gamesuccess$Skin9 = 	(function (_super) {
		__extends(gamesuccess$Skin9, _super);
		function gamesuccess$Skin9() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamesuccess$Skin9.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.percentWidth = 100;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.left = 49;
			t.scaleX = 0.7;
			t.scaleY = 0.7;
			t.source = "watchvideos";
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.left = 102;
			t.size = 60;
			t.text = "双倍领取";
			t.textColor = 0x993300;
			t.verticalCenter = 0.5;
			return t;
		};
		return gamesuccess$Skin9;
	})(eui.Skin);

	var gamesuccess$Skin10 = 	(function (_super) {
		__extends(gamesuccess$Skin10, _super);
		function gamesuccess$Skin10() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamesuccess$Skin10.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 40;
			t.text = "返回";
			t.textColor = 0x993300;
			t.verticalCenter = 0;
			return t;
		};
		return gamesuccess$Skin10;
	})(eui.Skin);

	function gamesuccess() {
		_super.call(this);
		this.skinParts = ["displayProgress","progressPercentage","labelgold","watchAd","lab_tt","btnReplay","btn_draw","btn_back","lab_draw","continueGame","share"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Group1_i(),this.labelgold_i(),this._Image4_i(),this.watchAd_i(),this.lab_tt_i(),this.btnReplay_i(),this.btn_draw_i(),this.lab_draw_i(),this.continueGame_i(),this.share_i()];
		this.btn_back_i();
		
		this.states = [
			new eui.State ("tt",
				[
					new eui.AddItems("btn_back","",2,"lab_draw")
				])
			,
			new eui.State ("wxgame",
				[
				])
			,
			new eui.State ("vivo",
				[
				])
			,
			new eui.State ("qq",
				[
					new eui.SetProperty("btnReplay","horizontalCenter",-5),
					new eui.SetProperty("btnReplay","bottom",410),
					new eui.SetProperty("continueGame","horizontalCenter",1.5),
					new eui.SetProperty("continueGame","bottom",315)
				])
		];
	}
	var _proto = gamesuccess.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 261;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(7,17,9,136);
		t.source = "titleBg";
		t.width = 900;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 87;
		t.horizontalCenter = 0;
		t.size = 85;
		t.text = "通关成功";
		t.textAlign = "center";
		t.top = 120;
		t.width = 400;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 150;
		t.horizontalCenter = 60;
		t.top = 525;
		t.visible = false;
		t.width = 420;
		t.elementsContent = [this._Image3_i(),this.displayProgress_i(),this.progressPercentage_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 150;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(17,17,21,33);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "surplusSkinprogress";
		t.top = 0;
		t.width = 420;
		return t;
	};
	_proto.displayProgress_i = function () {
		var t = new eui.Image();
		this.displayProgress = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.scale9Grid = new egret.Rectangle(12,8,10,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "getskinprogress";
		t.width = 31;
		t.x = 7;
		t.y = 9.5;
		return t;
	};
	_proto.progressPercentage_i = function () {
		var t = new eui.Label();
		this.progressPercentage = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 55;
		t.text = "10%";
		t.x = 135;
		t.y = 44.5;
		return t;
	};
	_proto.labelgold_i = function () {
		var t = new eui.Label();
		this.labelgold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 693;
		t.fontFamily = "Microsoft YaHei";
		t.height = 69;
		t.horizontalCenter = 102;
		t.size = 45;
		t.text = "+200";
		t.verticalAlign = "middle";
		t.width = 172;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 663;
		t.height = 120;
		t.horizontalCenter = -86;
		t.source = "money";
		t.width = 122;
		return t;
	};
	_proto.watchAd_i = function () {
		var t = new eui.Group();
		this.watchAd = t;
		t.bottom = 290;
		t.height = 170;
		t.visible = false;
		t.width = 477;
		t.x = 220;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label2_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(25,37,24,225);
		t.source = "btn_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 83;
		t.source = "watchvideos";
		t.width = 65;
		t.x = 83.5;
		t.y = 43.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 73;
		t.size = 70;
		t.text = " x2";
		t.textColor = 0x993300;
		t.width = 110;
		t.x = 175;
		t.y = 48.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "money";
		t.width = 122;
		t.x = 305;
		t.y = 25;
		return t;
	};
	_proto.lab_tt_i = function () {
		var t = new eui.Label();
		this.lab_tt = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "看视频双倍领取";
		t.visible = false;
		t.x = 338;
		t.y = 1028;
		return t;
	};
	_proto.btnReplay_i = function () {
		var t = new ScalerButton();
		this.btnReplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 314;
		t.height = 140;
		t.horizontalCenter = -5;
		t.label = "";
		t.width = 400;
		t.x = 272.72;
		t.y = 1121.21;
		t.skinName = gamesuccess$Skin8;
		return t;
	};
	_proto.btn_draw_i = function () {
		var t = new ScalerButton();
		this.btn_draw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 383;
		t.height = 140;
		t.horizontalCenter = 0;
		t.label = "";
		t.visible = false;
		t.width = 400;
		t.x = 282.72;
		t.y = 1131.21;
		t.skinName = gamesuccess$Skin9;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new ScalerButton();
		this.btn_back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.label = "";
		t.left = 0;
		t.width = 157;
		t.y = 359;
		t.skinName = gamesuccess$Skin10;
		return t;
	};
	_proto.lab_draw_i = function () {
		var t = new eui.Label();
		this.lab_draw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 319;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "单倍领取";
		t.textAlign = "center";
		t.textColor = 0x818181;
		t.verticalAlign = "middle";
		t.visible = false;
		return t;
	};
	_proto.continueGame_i = function () {
		var t = new eui.Group();
		this.continueGame = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 219;
		t.height = 71;
		t.horizontalCenter = -118.5;
		t.width = 283;
		t.elementsContent = [this._Label3_i(),this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "继续游戏";
		t.textAlign = "center";
		t.textColor = 0x818181;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = -61;
		t.y = -1;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.source = "energy";
		t.width = 39;
		t.x = 168.5;
		t.y = 6;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 55;
		t.size = 45;
		t.text = "-1";
		t.width = 60;
		t.x = 219;
		t.y = 9;
		return t;
	};
	_proto.share_i = function () {
		var t = new eui.Group();
		this.share = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 221;
		t.height = 72;
		t.horizontalCenter = 176;
		t.width = 202;
		t.elementsContent = [this._Image9_i(),this._Label5_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "share";
		t.width = 66;
		t.x = 18;
		t.y = 5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.size = 32;
		t.text = "分享";
		t.textColor = 0x818181;
		t.verticalAlign = "middle";
		t.width = 79;
		t.x = 95;
		t.y = 13;
		return t;
	};
	return gamesuccess;
})(eui.Skin);generateEUI.paths['resource/ui/game/noviceguide.exml'] = window.game = (function (_super) {
	__extends(game, _super);
	function game() {
		_super.call(this);
		this.skinParts = ["bulletRay_0","bulletRay_1","bulletRay_2","bulletRay_3","bulletRay_4","bulletRay_5","bullletexplosion","demonstration","blast","guideWoodBox","fingerEffect","guideFinger","nextView","guideConfirm"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.guideConfirm_i()];
	}
	var _proto = game.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 568;
		t.horizontalCenter = -8.5;
		t.verticalCenter = -126;
		t.width = 513;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.demonstration_i(),this.blast_i(),this.guideWoodBox_i(),this.fingerEffect_i(),this.guideFinger_i(),this.nextView_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(22,20,24,31);
		t.source = "downBg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 155;
		t.scale9Grid = new egret.Rectangle(26,22,21,26);
		t.source = "downBg";
		t.width = 514;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.source = "character_2";
		t.width = 57;
		t.x = 78;
		t.y = 347;
		return t;
	};
	_proto.demonstration_i = function () {
		var t = new eui.Group();
		this.demonstration = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 101;
		t.height = 220;
		t.horizontalCenter = 1;
		t.width = 454;
		t.y = 294;
		t.elementsContent = [this._Image5_i(),this.bulletRay_0_i(),this.bulletRay_1_i(),this.bulletRay_2_i(),this.bulletRay_3_i(),this.bulletRay_4_i(),this.bulletRay_5_i(),this.bullletexplosion_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 57;
		t.anchorOffsetY = 113;
		t.height = 178;
		t.source = "character_1";
		t.width = 203;
		t.x = 80;
		t.y = 100.76;
		return t;
	};
	_proto.bulletRay_0_i = function () {
		var t = new eui.Image();
		this.bulletRay_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.rotation = 354.16;
		t.scale9Grid = new egret.Rectangle(0,0,23,8);
		t.source = "character_3";
		t.width = 25;
		t.x = 236;
		t.y = 61.57;
		return t;
	};
	_proto.bulletRay_1_i = function () {
		var t = new eui.Image();
		this.bulletRay_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.rotation = 354.16;
		t.scale9Grid = new egret.Rectangle(0,0,23,8);
		t.source = "character_3";
		t.width = 25;
		t.x = 271.9;
		t.y = 57.83;
		return t;
	};
	_proto.bulletRay_2_i = function () {
		var t = new eui.Image();
		this.bulletRay_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.rotation = 354.16;
		t.scale9Grid = new egret.Rectangle(0,0,23,8);
		t.source = "character_3";
		t.width = 25;
		t.x = 311.19;
		t.y = 52.09;
		return t;
	};
	_proto.bulletRay_3_i = function () {
		var t = new eui.Image();
		this.bulletRay_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.rotation = 354.16;
		t.scale9Grid = new egret.Rectangle(0,0,23,8);
		t.source = "character_3";
		t.width = 25;
		t.x = 351;
		t.y = 49.09;
		return t;
	};
	_proto.bulletRay_4_i = function () {
		var t = new eui.Image();
		this.bulletRay_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.rotation = 354.16;
		t.scale9Grid = new egret.Rectangle(0,0,23,8);
		t.source = "character_3";
		t.width = 25;
		t.x = 390;
		t.y = 45.61;
		return t;
	};
	_proto.bulletRay_5_i = function () {
		var t = new eui.Image();
		this.bulletRay_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.rotation = 354.16;
		t.scale9Grid = new egret.Rectangle(0,0,23,8);
		t.source = "character_3";
		t.width = 25;
		t.x = 427.81;
		t.y = 40.87;
		return t;
	};
	_proto.bullletexplosion_i = function () {
		var t = new eui.Image();
		this.bullletexplosion = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.69;
		t.rotation = 337.97;
		t.source = "bullletExplosion";
		t.visible = false;
		t.width = 28.12;
		t.x = 223.25;
		t.y = 62.12;
		return t;
	};
	_proto.blast_i = function () {
		var t = new eui.Image();
		this.blast = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143;
		t.source = "guideblast";
		t.visible = false;
		t.width = 255;
		t.x = 228.19;
		t.y = 269.03;
		return t;
	};
	_proto.guideWoodBox_i = function () {
		var t = new eui.Image();
		this.guideWoodBox = t;
		t.height = 110;
		t.source = "guidewoodbox";
		t.width = 110;
		t.x = 314;
		t.y = 302;
		return t;
	};
	_proto.fingerEffect_i = function () {
		var t = new eui.Image();
		this.fingerEffect = t;
		t.height = 20;
		t.rotation = 5.62;
		t.source = "fingerEffects";
		t.visible = false;
		t.width = 30;
		t.x = 448;
		t.y = 267;
		return t;
	};
	_proto.guideFinger_i = function () {
		var t = new eui.Image();
		this.guideFinger = t;
		t.height = 76;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guidefinger";
		t.width = 68;
		t.x = 450.1;
		t.y = 290;
		return t;
	};
	_proto.nextView_i = function () {
		var t = new eui.Image();
		this.nextView = t;
		t.height = 38;
		t.source = "guideconfirm";
		t.visible = false;
		t.width = 49;
		t.x = 421.91;
		t.y = 35;
		return t;
	};
	_proto.guideConfirm_i = function () {
		var t = new eui.Group();
		this.guideConfirm = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.horizontalCenter = 5;
		t.verticalCenter = 322;
		t.visible = false;
		t.width = 230;
		t.elementsContent = [this._Image6_i(),this._Label1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 88;
		t.scale9Grid = new egret.Rectangle(16,24,13,45);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "confirm";
		t.width = 230;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "好的";
		t.textColor = 0x0b61c4;
		t.x = 75;
		t.y = 24;
		return t;
	};
	return game;
})(eui.Skin);generateEUI.paths['resource/ui/main/energy.exml'] = window.energy = (function (_super) {
	__extends(energy, _super);
	function energy() {
		_super.call(this);
		this.skinParts = ["btnclose","labelEnergy","lab_info","labelAdd","getEnergy"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btnclose_i(),this._Image4_i(),this.labelEnergy_i(),this.lab_info_i(),this.labelAdd_i(),this.getEnergy_i()];
	}
	var _proto = energy.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 421;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(15,17,27,28);
		t.source = "downbackground";
		t.top = 396;
		t.width = 713;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.horizontalCenter = 1.5;
		t.scale9Grid = new egret.Rectangle(23,26,18,6);
		t.source = "upbackground";
		t.top = 335;
		t.width = 713;
		return t;
	};
	_proto.btnclose_i = function () {
		var t = new eui.Image();
		this.btnclose = t;
		t.height = 58;
		t.right = 134;
		t.source = "close";
		t.top = 348;
		t.width = 58;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 177;
		t.horizontalCenter = -40.5;
		t.source = "energy";
		t.top = 499;
		t.width = 143;
		return t;
	};
	_proto.labelEnergy_i = function () {
		var t = new eui.Label();
		this.labelEnergy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "今日次数 ：0/3";
		t.textAlign = "center";
		t.top = 746;
		t.width = 347;
		return t;
	};
	_proto.lab_info_i = function () {
		var t = new eui.Label();
		this.lab_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "看视频免费领取";
		t.x = 338;
		t.y = 908;
		return t;
	};
	_proto.labelAdd_i = function () {
		var t = new eui.Label();
		this.labelAdd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.horizontalCenter = 97.5;
		t.size = 40;
		t.text = "+ 5";
		t.top = 568;
		t.width = 85;
		return t;
	};
	_proto.getEnergy_i = function () {
		var t = new eui.Group();
		this.getEnergy = t;
		t.height = 170;
		t.horizontalCenter = 4;
		t.verticalCenter = 243;
		t.width = 478;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.scale9Grid = new egret.Rectangle(19,37,25,225);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_1";
		t.width = 478;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "watchvideos";
		t.width = 65;
		t.x = 73.5;
		t.y = 45;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 73;
		t.size = 50;
		t.text = "免费领取";
		t.textAlign = "center";
		t.textColor = 0x97310d;
		t.verticalAlign = "middle";
		t.width = 225;
		t.x = 173;
		t.y = 45;
		return t;
	};
	return energy;
})(eui.Skin);generateEUI.paths['resource/ui/main/game.exml'] = window.game = (function (_super) {
	__extends(game, _super);
	function game() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1600;
		this.width = 900;
	}
	var _proto = game.prototype;

	return game;
})(eui.Skin);generateEUI.paths['resource/ui/main/gun.exml'] = window.gun = (function (_super) {
	__extends(gun, _super);
	function gun() {
		_super.call(this);
		this.skinParts = ["gunList","gunScroller","BackBtn"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this.BackBtn_i()];
	}
	var _proto = gun.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 625;
		t.horizontalCenter = 0;
		t.width = 900;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Image4_i(),this.gunScroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.height = 625;
		t.horizontalCenter = 3;
		t.scale9Grid = new egret.Rectangle(21,20,24,23);
		t.source = "downbackground";
		t.width = 900;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(16,15,10,12);
		t.source = "gunmodel";
		t.verticalCenter = -208;
		t.visible = false;
		t.width = 411;
		t.x = 244.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "枪支";
		t.visible = false;
		t.x = 337;
		t.y = 68;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.source = "gunidentification";
		t.visible = false;
		t.width = 91;
		t.x = 466;
		t.y = 55;
		return t;
	};
	_proto.gunScroller_i = function () {
		var t = new eui.Scroller();
		this.gunScroller = t;
		t.height = 595;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 30;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 595;
		t.width = 900;
		t.elementsContent = [this.gunList_i()];
		return t;
	};
	_proto.gunList_i = function () {
		var t = new eui.List();
		this.gunList = t;
		t.height = 595;
		t.width = 0;
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.BackBtn_i = function () {
		var t = new eui.Group();
		this.BackBtn = t;
		t.bottom = 668;
		t.height = 176;
		t.width = 214;
		t.x = 686;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 176;
		t.right = -40;
		t.scale9Grid = new egret.Rectangle(19,52,29,210);
		t.source = "gunbackground";
		t.verticalCenter = 0;
		t.width = 254;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 62;
		t.source = "back";
		t.width = 55;
		t.x = 70;
		t.y = 20;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "返 回";
		t.x = 51.5;
		t.y = 103;
		return t;
	};
	return gun;
})(eui.Skin);generateEUI.paths['resource/ui/main/gunRender.exml'] = window.gunRender = (function (_super) {
	__extends(gunRender, _super);
	function gunRender() {
		_super.call(this);
		this.skinParts = ["gunbg","gunhead","gunSelect","setBg","setImage","setMoney","labelText","setGroup"];
		
		this.height = 262;
		this.width = 178;
		this.elementsContent = [this.gunSelect_i(),this.setGroup_i()];
	}
	var _proto = gunRender.prototype;

	_proto.gunSelect_i = function () {
		var t = new eui.Group();
		this.gunSelect = t;
		t.height = 262;
		t.width = 178;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.gunbg_i(),this.gunhead_i()];
		return t;
	};
	_proto.gunbg_i = function () {
		var t = new eui.Image();
		this.gunbg = t;
		t.height = 185;
		t.scale9Grid = new egret.Rectangle(24,54,18,71);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gunnochoose";
		t.width = 177;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gunhead_i = function () {
		var t = new eui.Image();
		this.gunhead = t;
		t.height = 155;
		t.horizontalCenter = -2.5;
		t.source = "";
		t.verticalCenter = -37.5;
		t.width = 155;
		return t;
	};
	_proto.setGroup_i = function () {
		var t = new eui.Group();
		this.setGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 160;
		t.x = 8;
		t.y = 189;
		t.elementsContent = [this.setBg_i(),this.setImage_i(),this.setMoney_i(),this.labelText_i()];
		return t;
	};
	_proto.setBg_i = function () {
		var t = new eui.Image();
		this.setBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.scale9Grid = new egret.Rectangle(16,19,34,261);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_1";
		t.width = 167;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.setImage_i = function () {
		var t = new eui.Image();
		this.setImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.source = "money";
		t.width = 46;
		t.x = 14;
		t.y = 7;
		return t;
	};
	_proto.setMoney_i = function () {
		var t = new eui.Label();
		this.setMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 42;
		t.text = "7000";
		t.textAlign = "center";
		t.textColor = 0x97310d;
		t.verticalAlign = "middle";
		t.width = 123;
		t.x = 47;
		t.y = 10;
		return t;
	};
	_proto.labelText_i = function () {
		var t = new eui.Label();
		this.labelText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "点击使用";
		t.textAlign = "center";
		t.textColor = 0x1562c1;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 154;
		t.x = 6;
		t.y = -1;
		return t;
	};
	return gunRender;
})(eui.Skin);generateEUI.paths['resource/ui/main/menu.exml'] = window.menu = (function (_super) {
	__extends(menu, _super);
	function menu() {
		_super.call(this);
		this.skinParts = ["rect","setBtn","levelChange","levelprogress_0","levelprogress_1","levelprogress_5","levelprogress_6","levelprogress_7","levelprogress_8","levelprogress_2","levelprogress_9","levelprogress_3","levelprogress_4","bosslevel0","roleSelection","gunSelection","startBtn","modelSelectBg","modelSelect","view0","view2","view1","view3","moneyNumber","moneyGroup","labelEnergy","energyGroup","sign","benfits","elite","labelEnergyT","share"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.rect_i(),this._Image2_i(),this.setBtn_i(),this.levelChange_i(),this._Group1_i(),this.roleSelection_i(),this.gunSelection_i(),this.startBtn_i(),this.modelSelectBg_i(),this.modelSelect_i(),this.view0_i(),this.view2_i(),this.view1_i(),this.view3_i(),this._Image12_i(),this.moneyNumber_i(),this._Image13_i(),this.moneyGroup_i(),this._Image16_i(),this.labelEnergy_i(),this._Image17_i(),this.energyGroup_i(),this.sign_i(),this.elite_i(),this.labelEnergyT_i()];
		this.benfits_i();
		
		this.share_i();
		
		this.states = [
			new eui.State ("wxgame",
				[
					new eui.AddItems("benfits","",2,"elite"),
					new eui.AddItems("share","",1,"")
				])
			,
			new eui.State ("qq",
				[
					new eui.AddItems("benfits","",2,"elite"),
					new eui.SetProperty("_Label5","text","更多好玩")
				])
			,
			new eui.State ("tt",
				[
					new eui.AddItems("benfits","",2,"elite")
				])
			,
			new eui.State ("vivo",
				[
				])
		];
	}
	var _proto = menu.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_4";
		t.percentWidth = 100;
		t.x = -1;
		t.y = 4;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Image();
		this.rect = t;
		t.bottom = 0;
		t.height = 700;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_2";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 700;
		t.height = 38;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_3";
		t.percentWidth = 100;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Image();
		this.setBtn = t;
		t.height = 100;
		t.source = "setting";
		t.top = 157;
		t.width = 100;
		t.x = 20;
		t.y = 57;
		return t;
	};
	_proto.levelChange_i = function () {
		var t = new eui.Label();
		this.levelChange = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 7.5;
		t.size = 40;
		t.text = "LEVEL 1";
		t.top = 315;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 217;
		t.horizontalCenter = 7;
		t.top = 273;
		t.visible = false;
		t.width = 670;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this.levelprogress_0_i(),this.levelprogress_1_i(),this.levelprogress_5_i(),this.levelprogress_6_i(),this.levelprogress_7_i(),this.levelprogress_8_i(),this.levelprogress_2_i(),this.levelprogress_9_i(),this.levelprogress_3_i(),this.levelprogress_4_i(),this.bosslevel0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 217;
		t.scale9Grid = new egret.Rectangle(14,14,12,11);
		t.source = "moneybackground";
		t.width = 670;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.source = "startingpoint";
		t.width = 126;
		t.x = 33;
		t.y = 43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 127;
		t.source = "endpoint";
		t.width = 132;
		t.x = 509;
		t.y = 45;
		return t;
	};
	_proto.levelprogress_0_i = function () {
		var t = new eui.Image();
		this.levelprogress_0 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "passlevel";
		t.width = 22;
		t.x = 168;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_1_i = function () {
		var t = new eui.Image();
		this.levelprogress_1 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "passlevel";
		t.width = 22;
		t.x = 200;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_5_i = function () {
		var t = new eui.Image();
		this.levelprogress_5 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 22;
		t.x = 331;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_6_i = function () {
		var t = new eui.Image();
		this.levelprogress_6 = t;
		t.anchorOffsetX = 0;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 22;
		t.x = 363;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_7_i = function () {
		var t = new eui.Image();
		this.levelprogress_7 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 22;
		t.x = 395;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_8_i = function () {
		var t = new eui.Image();
		this.levelprogress_8 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 22;
		t.x = 427;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_2_i = function () {
		var t = new eui.Image();
		this.levelprogress_2 = t;
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "passinglevel";
		t.width = 25;
		t.x = 232;
		t.y = 69;
		return t;
	};
	_proto.levelprogress_9_i = function () {
		var t = new eui.Image();
		this.levelprogress_9 = t;
		t.height = 90;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 25;
		t.x = 459;
		t.y = 69;
		return t;
	};
	_proto.levelprogress_3_i = function () {
		var t = new eui.Image();
		this.levelprogress_3 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 22;
		t.x = 267;
		t.y = 79;
		return t;
	};
	_proto.levelprogress_4_i = function () {
		var t = new eui.Image();
		this.levelprogress_4 = t;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(6,4,8,11);
		t.source = "levelprogress";
		t.width = 22;
		t.x = 299;
		t.y = 79;
		return t;
	};
	_proto.bosslevel0_i = function () {
		var t = new eui.Image();
		this.bosslevel0 = t;
		t.height = 52;
		t.source = "bosslevel";
		t.width = 54;
		t.x = 444.5;
		t.y = 10;
		return t;
	};
	_proto.roleSelection_i = function () {
		var t = new eui.Group();
		this.roleSelection = t;
		t.anchorOffsetX = 0;
		t.bottom = 668;
		t.height = 176;
		t.width = 214;
		t.x = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 176;
		t.scale9Grid = new egret.Rectangle(18,48,32,214);
		t.source = "gunbackground";
		t.width = 254;
		t.x = -34;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 72;
		t.source = "skinidentification";
		t.width = 89;
		t.x = 56;
		t.y = 22;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "角 色 ";
		t.x = 48.5;
		t.y = 109;
		return t;
	};
	_proto.gunSelection_i = function () {
		var t = new eui.Group();
		this.gunSelection = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 668;
		t.height = 176;
		t.right = 0;
		t.width = 214;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 176;
		t.scale9Grid = new egret.Rectangle(18,48,32,214);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gunbackground";
		t.width = 254;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.source = "gunidentification";
		t.width = 90;
		t.x = 63;
		t.y = 22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "枪 支";
		t.x = 63;
		t.y = 100;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Group();
		this.startBtn = t;
		t.bottom = 480;
		t.height = 216;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 400;
		t.x = 253.68;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Label3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(24,44,19,201);
		t.source = "btn_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = -3;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "originalgun";
		t.x = 29.52;
		t.y = 43.05;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "开始游戏";
		t.textColor = 0x993300;
		t.x = 137.82;
		t.y = 126.95;
		return t;
	};
	_proto.modelSelectBg_i = function () {
		var t = new eui.Image();
		this.modelSelectBg = t;
		t.bottom = 453;
		t.height = 102;
		t.scale9Grid = new egret.Rectangle(14,14,14,12);
		t.source = "gunmodel";
		t.visible = false;
		t.width = 414;
		t.x = 242;
		return t;
	};
	_proto.modelSelect_i = function () {
		var t = new eui.Label();
		this.modelSelect = t;
		t.bold = true;
		t.bottom = 481;
		t.fontFamily = "Microsoft YaHei";
		t.size = 45;
		t.text = "猎枪模式";
		t.visible = false;
		t.x = 361;
		return t;
	};
	_proto.view0_i = function () {
		var t = new eui.Image();
		this.view0 = t;
		t.bottom = 45;
		t.height = 25;
		t.source = "viewprogress";
		t.visible = false;
		t.width = 25;
		t.x = 347;
		return t;
	};
	_proto.view2_i = function () {
		var t = new eui.Image();
		this.view2 = t;
		t.bottom = 45;
		t.height = 25;
		t.source = "viewnoloading";
		t.visible = false;
		t.width = 25;
		t.x = 481;
		return t;
	};
	_proto.view1_i = function () {
		var t = new eui.Image();
		this.view1 = t;
		t.bottom = 45;
		t.height = 25;
		t.source = "viewnoloading";
		t.visible = false;
		t.width = 25;
		t.x = 414;
		return t;
	};
	_proto.view3_i = function () {
		var t = new eui.Image();
		this.view3 = t;
		t.bottom = 45;
		t.height = 25;
		t.source = "viewnoloading";
		t.visible = false;
		t.width = 25;
		t.x = 548;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.right = 174;
		t.scale9Grid = new egret.Rectangle(11,11,16,18);
		t.source = "moneybackground";
		t.top = 190;
		t.width = 200;
		return t;
	};
	_proto.moneyNumber_i = function () {
		var t = new eui.Label();
		this.moneyNumber = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 47;
		t.right = 174;
		t.size = 40;
		t.text = "2220";
		t.textAlign = "center";
		t.top = 195;
		t.width = 200;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 81;
		t.right = 345;
		t.source = "money";
		t.top = 166;
		t.width = 81;
		return t;
	};
	_proto.moneyGroup_i = function () {
		var t = new eui.Group();
		this.moneyGroup = t;
		t.height = 74;
		t.right = 112;
		t.top = 171;
		t.width = 74;
		t.elementsContent = [this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "addbg";
		t.width = 74;
		t.x = -4.67;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "add";
		t.width = 45;
		t.x = 11.82;
		t.y = 17;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.left = 190;
		t.scale9Grid = new egret.Rectangle(11,11,16,18);
		t.source = "moneybackground";
		t.top = 188;
		t.width = 200;
		return t;
	};
	_proto.labelEnergy_i = function () {
		var t = new eui.Label();
		this.labelEnergy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 47;
		t.left = 186;
		t.size = 40;
		t.text = "20/20";
		t.textAlign = "center";
		t.top = 192;
		t.width = 200;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 78;
		t.left = 154;
		t.source = "energy";
		t.top = 171;
		t.width = 71;
		return t;
	};
	_proto.energyGroup_i = function () {
		var t = new eui.Group();
		this.energyGroup = t;
		t.height = 74;
		t.left = 373;
		t.top = 171;
		t.width = 74;
		t.elementsContent = [this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "addbg";
		t.width = 74;
		t.x = -3.33;
		t.y = 0;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "add";
		t.width = 45;
		t.x = 11.82;
		t.y = 17;
		return t;
	};
	_proto.sign_i = function () {
		var t = new eui.Group();
		this.sign = t;
		t.bottom = 1047;
		t.height = 124;
		t.visible = false;
		t.width = 111;
		t.x = 42;
		t.elementsContent = [this._Image20_i(),this._Label4_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign";
		t.width = 111;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.stroke = 5;
		t.strokeColor = 0x8b3fda;
		t.text = "七日签到";
		t.textColor = 0xffffff;
		t.x = -7;
		t.y = 95.67;
		return t;
	};
	_proto.benfits_i = function () {
		var t = new eui.Group();
		this.benfits = t;
		t.bottom = 1049;
		t.height = 122;
		t.visible = false;
		t.width = 122;
		t.x = 746.33;
		t.elementsContent = [this._Image21_i(),this._Label5_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gamebenefits";
		t.width = 122;
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 5;
		t.strokeColor = 0x8b3fda;
		t.text = "游戏福利";
		t.textColor = 0xffffff;
		t.x = -3.64;
		t.y = 100.71;
		return t;
	};
	_proto.elite_i = function () {
		var t = new eui.Group();
		this.elite = t;
		t.bottom = 911;
		t.height = 122;
		t.right = 35;
		t.visible = false;
		t.width = 122;
		t.elementsContent = [this._Image22_i(),this._Label6_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "elite";
		t.width = 122;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.stroke = 5;
		t.strokeColor = 0x8b3fda;
		t.text = "精英联盟";
		t.textColor = 0xffffff;
		t.x = 1.05;
		t.y = 105.4;
		return t;
	};
	_proto.labelEnergyT_i = function () {
		var t = new eui.Label();
		this.labelEnergyT = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.size = 30;
		t.text = "10:30后+1";
		t.width = 158;
		t.x = 207.5;
		t.y = 250;
		return t;
	};
	_proto.share_i = function () {
		var t = new eui.Group();
		this.share = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 901;
		t.height = 106;
		t.width = 172;
		t.x = -18;
		t.elementsContent = [this._Image23_i(),this._Image24_i(),this._Label7_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.scale9Grid = new egret.Rectangle(25,37,18,225);
		t.source = "gunbackground";
		t.width = 142;
		t.x = 38;
		t.y = 4;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "sharebg";
		t.x = 64;
		t.y = 12;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 32;
		t.text = "分享";
		t.textAlign = "center";
		t.width = 87;
		t.x = 62;
		t.y = 82;
		return t;
	};
	return menu;
})(eui.Skin);generateEUI.paths['resource/ui/main/messagebox.exml'] = window.messagebox = (function (_super) {
	__extends(messagebox, _super);
	function messagebox() {
		_super.call(this);
		this.skinParts = ["label_title","label_content","button_ok"];
		
		this.height = 500;
		this.width = 700;
		this.elementsContent = [this.label_title_i(),this.label_content_i(),this.button_ok_i()];
	}
	var _proto = messagebox.prototype;

	_proto.label_title_i = function () {
		var t = new eui.Label();
		this.label_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 84;
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "登陆失败";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -136;
		t.width = 298;
		return t;
	};
	_proto.label_content_i = function () {
		var t = new eui.Label();
		this.label_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 47;
		t.horizontalCenter = 4;
		t.size = 35;
		t.text = "init error";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -52.5;
		t.width = 212;
		return t;
	};
	_proto.button_ok_i = function () {
		var t = new eui.Group();
		this.button_ok = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 128;
		t.horizontalCenter = 8;
		t.verticalCenter = 89;
		t.width = 296;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(19,37,27,225);
		t.source = "btn_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 115;
		t.size = 50;
		t.text = "点击重试";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 287;
		t.x = 2;
		t.y = 3;
		return t;
	};
	return messagebox;
})(eui.Skin);generateEUI.paths['resource/ui/main/money.exml'] = window.money = (function (_super) {
	__extends(money, _super);
	function money() {
		_super.call(this);
		this.skinParts = ["btnclose","labelMoney","labelAdd","lab_info","getMoney"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btnclose_i(),this._Image4_i(),this.labelMoney_i(),this.labelAdd_i(),this.lab_info_i(),this.getMoney_i()];
	}
	var _proto = money.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 421;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(15,17,27,28);
		t.source = "downbackground";
		t.top = 396;
		t.width = 713;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 94;
		t.horizontalCenter = 1.5;
		t.scale9Grid = new egret.Rectangle(23,26,18,6);
		t.source = "upbackground";
		t.top = 335;
		t.width = 713;
		return t;
	};
	_proto.btnclose_i = function () {
		var t = new eui.Image();
		this.btnclose = t;
		t.height = 58;
		t.right = 134;
		t.source = "close";
		t.top = 348;
		t.width = 58;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -64;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "money";
		t.top = 501;
		return t;
	};
	_proto.labelMoney_i = function () {
		var t = new eui.Label();
		this.labelMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "今日次数 ：0/3";
		t.textAlign = "center";
		t.top = 746;
		t.width = 347;
		return t;
	};
	_proto.labelAdd_i = function () {
		var t = new eui.Label();
		this.labelAdd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 39;
		t.horizontalCenter = 116.5;
		t.size = 40;
		t.text = "+300";
		t.top = 563;
		t.width = 135;
		return t;
	};
	_proto.lab_info_i = function () {
		var t = new eui.Label();
		this.lab_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "看视频免费领取";
		t.x = 338;
		t.y = 908;
		return t;
	};
	_proto.getMoney_i = function () {
		var t = new eui.Group();
		this.getMoney = t;
		t.height = 170;
		t.horizontalCenter = 4;
		t.top = 958;
		t.width = 478;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 170;
		t.scale9Grid = new egret.Rectangle(19,37,25,225);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_1";
		t.width = 478;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "watchvideos";
		t.width = 65;
		t.x = 73.5;
		t.y = 45;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 73;
		t.size = 50;
		t.text = "免费领取";
		t.textAlign = "center";
		t.textColor = 0x97310d;
		t.verticalAlign = "middle";
		t.width = 225;
		t.x = 173;
		t.y = 45;
		return t;
	};
	return money;
})(eui.Skin);generateEUI.paths['resource/ui/main/role.exml'] = window.role = (function (_super) {
	__extends(role, _super);
	function role() {
		_super.call(this);
		this.skinParts = ["roleList","roleScroller","backBtn"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Group2_i(),this.backBtn_i()];
	}
	var _proto = role.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 625;
		t.horizontalCenter = 0;
		t.width = 900;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Image4_i(),this.roleScroller_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 650;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(21,20,24,23);
		t.source = "downbackground";
		t.width = 900;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(15,14,13,14);
		t.source = "gunmodel";
		t.verticalCenter = -208;
		t.visible = false;
		t.width = 411;
		t.x = 244.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "角色";
		t.visible = false;
		t.x = 337;
		t.y = 68;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.source = "skinidentification";
		t.visible = false;
		t.width = 91;
		t.x = 466;
		t.y = 55;
		return t;
	};
	_proto.roleScroller_i = function () {
		var t = new eui.Scroller();
		this.roleScroller = t;
		t.height = 595;
		t.horizontalCenter = 0;
		t.verticalCenter = 15;
		t.percentWidth = 100;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 1;
		t.elementsContent = [this.roleList_i()];
		return t;
	};
	_proto.roleList_i = function () {
		var t = new eui.List();
		this.roleList = t;
		t.height = 595;
		t.width = 0;
		t.x = 55;
		t.y = 0;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Group();
		this.backBtn = t;
		t.bottom = 668;
		t.height = 176;
		t.width = 214;
		t.x = 0;
		t.elementsContent = [this._Image5_i(),this._Label2_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 176;
		t.left = -34;
		t.scale9Grid = new egret.Rectangle(19,29,29,236);
		t.source = "gunbackground";
		t.verticalCenter = 1;
		t.width = 254;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "返 回";
		t.x = 51.5;
		t.y = 103;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 62;
		t.source = "back";
		t.width = 55;
		t.x = 70;
		t.y = 20;
		return t;
	};
	return role;
})(eui.Skin);generateEUI.paths['resource/ui/main/roleRender.exml'] = window.roleRender = (function (_super) {
	__extends(roleRender, _super);
	function roleRender() {
		_super.call(this);
		this.skinParts = ["roleBg","rolehead","roleMouth","roleSelect","setBg","setImage","setMoney","labelText","setGroup"];
		
		this.height = 262;
		this.width = 178;
		this.elementsContent = [this.roleSelect_i(),this.setGroup_i()];
	}
	var _proto = roleRender.prototype;

	_proto.roleSelect_i = function () {
		var t = new eui.Group();
		this.roleSelect = t;
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 178;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.roleBg_i(),this.rolehead_i(),this.roleMouth_i()];
		return t;
	};
	_proto.roleBg_i = function () {
		var t = new eui.Image();
		this.roleBg = t;
		t.height = 180;
		t.scale9Grid = new egret.Rectangle(24,54,18,71);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "gunnochoose";
		t.width = 178;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rolehead_i = function () {
		var t = new eui.Image();
		this.rolehead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 154;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 1.5;
		t.width = 154;
		return t;
	};
	_proto.roleMouth_i = function () {
		var t = new eui.Image();
		this.roleMouth = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 75;
		t.x = 81;
		t.y = 105;
		return t;
	};
	_proto.setGroup_i = function () {
		var t = new eui.Group();
		this.setGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.width = 169;
		t.x = 0;
		t.y = 192;
		t.elementsContent = [this.setBg_i(),this.setImage_i(),this.setMoney_i(),this.labelText_i()];
		return t;
	};
	_proto.setBg_i = function () {
		var t = new eui.Image();
		this.setBg = t;
		t.height = 72;
		t.scale9Grid = new egret.Rectangle(19,15,18,88);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "Tipsbtn";
		t.width = 167;
		t.x = 5;
		t.y = -3;
		return t;
	};
	_proto.setImage_i = function () {
		var t = new eui.Image();
		this.setImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "money";
		t.width = 52;
		t.x = 12;
		t.y = 7;
		return t;
	};
	_proto.setMoney_i = function () {
		var t = new eui.Label();
		this.setMoney = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 42;
		t.text = "签到获取";
		t.textAlign = "right";
		t.textColor = 0x97310d;
		t.verticalAlign = "middle";
		t.width = 123;
		t.x = 27.5;
		t.y = 9;
		return t;
	};
	_proto.labelText_i = function () {
		var t = new eui.Label();
		this.labelText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "正在使用";
		t.textAlign = "center";
		t.textColor = 0x97310d;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 164;
		t.x = 10;
		t.y = 0;
		return t;
	};
	return roleRender;
})(eui.Skin);generateEUI.paths['resource/ui/main/setting.exml'] = window.game = (function (_super) {
	__extends(game, _super);
	function game() {
		_super.call(this);
		this.skinParts = ["btn_sz","closeBtn","e_level","g_level","voiceChange","voiceOn","voice","shockChange","shockOn","shock"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = game.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this.btn_sz_i(),this.closeBtn_i(),this._Label1_i(),this._Label2_i(),this.g_level_i(),this.voice_i(),this.shock_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 496;
		t.scale9Grid = new egret.Rectangle(25,20,16,25);
		t.source = "downbackground";
		t.width = 710;
		t.x = 94;
		t.y = 490;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 96;
		t.scale9Grid = new egret.Rectangle(19,15,23,13);
		t.source = "upbackground";
		t.width = 710;
		t.x = 94;
		t.y = 490;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 400;
		t.source = "middlebg";
		t.width = 710;
		t.x = 94;
		t.y = 586;
		return t;
	};
	_proto.btn_sz_i = function () {
		var t = new eui.Label();
		this.btn_sz = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 45;
		t.text = "设 置";
		t.textColor = 0xc669ff;
		t.x = 396;
		t.y = 515.5;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.height = 61;
		t.source = "close";
		t.width = 64;
		t.x = 698;
		t.y = 507.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 45;
		t.text = "背景音效";
		t.x = 174;
		t.y = 670;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 45;
		t.text = "震动";
		t.x = 174;
		t.y = 783;
		return t;
	};
	_proto.g_level_i = function () {
		var t = new eui.Group();
		this.g_level = t;
		t.visible = false;
		t.x = 174.91;
		t.y = 870;
		t.elementsContent = [this._Label3_i(),this._Image5_i(),this.e_level_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 45;
		t.text = "关卡";
		t.x = 0;
		t.y = 16.93;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 85;
		t.scale9Grid = new egret.Rectangle(32,27,18,22);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "voicebg";
		t.width = 165;
		t.x = 389.09;
		t.y = 0;
		return t;
	};
	_proto.e_level_i = function () {
		var t = new eui.EditableText();
		this.e_level = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 134;
		t.x = 403.09;
		t.y = 14;
		return t;
	};
	_proto.voice_i = function () {
		var t = new eui.Group();
		this.voice = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.rotation = 359.93;
		t.width = 165;
		t.x = 562;
		t.y = 658;
		t.elementsContent = [this.voiceChange_i(),this.voiceOn_i()];
		return t;
	};
	_proto.voiceChange_i = function () {
		var t = new eui.Image();
		this.voiceChange = t;
		t.height = 85;
		t.scale9Grid = new egret.Rectangle(32,27,18,22);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "voicebg";
		t.width = 165;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.voiceOn_i = function () {
		var t = new eui.Image();
		this.voiceOn = t;
		t.height = 57;
		t.scale9Grid = new egret.Rectangle(18,16,19,25);
		t.source = "voice";
		t.width = 55;
		t.x = 87;
		t.y = 14;
		return t;
	};
	_proto.shock_i = function () {
		var t = new eui.Group();
		this.shock = t;
		t.height = 85;
		t.width = 165;
		t.x = 565;
		t.y = 761;
		t.elementsContent = [this.shockChange_i(),this.shockOn_i()];
		return t;
	};
	_proto.shockChange_i = function () {
		var t = new eui.Image();
		this.shockChange = t;
		t.height = 85;
		t.scale9Grid = new egret.Rectangle(32,27,18,22);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shockbg";
		t.width = 165;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.shockOn_i = function () {
		var t = new eui.Image();
		this.shockOn = t;
		t.height = 57;
		t.scale9Grid = new egret.Rectangle(18,17,26,27);
		t.source = "shock";
		t.width = 55;
		t.x = 13;
		t.y = 14;
		return t;
	};
	return game;
})(eui.Skin);generateEUI.paths['resource/ui/main/tips.exml'] = window.tips = (function (_super) {
	__extends(tips, _super);
	function tips() {
		_super.call(this);
		this.skinParts = ["labelTips"];
		
		this.height = 130;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.labelTips_i()];
	}
	var _proto = tips.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(26,23,9,145);
		t.source = "gunchoose";
		t.verticalCenter = 0;
		t.width = 850;
		return t;
	};
	_proto.labelTips_i = function () {
		var t = new eui.Label();
		this.labelTips = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 45;
		t.stroke = 5;
		t.strokeColor = 0xd98123;
		t.text = "Label";
		t.textColor = 0xffffff;
		t.verticalCenter = -3.5;
		return t;
	};
	return tips;
})(eui.Skin);generateEUI.paths['resource/ui/profit/goldbox.exml'] = window.goldbox = (function (_super) {
	__extends(goldbox, _super);
	var goldbox$Skin11 = 	(function (_super) {
		__extends(goldbox$Skin11, _super);
		function goldbox$Skin11() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goldbox$Skin11.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 107;
			t.source = "exit_1";
			t.width = 203;
			return t;
		};
		return goldbox$Skin11;
	})(eui.Skin);

	var goldbox$Skin12 = 	(function (_super) {
		__extends(goldbox$Skin12, _super);
		function goldbox$Skin12() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goldbox$Skin12.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.height = 154;
			t.scale9Grid = new egret.Rectangle(29,41,17,196);
			t.source = "btn_1";
			t.width = 392;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 60;
			t.stroke = 0;
			t.strokeColor = 0xF18613;
			t.text = "打开宝箱";
			t.textAlign = "left";
			t.textColor = 0x993300;
			t.verticalCenter = -6;
			return t;
		};
		return goldbox$Skin12;
	})(eui.Skin);

	function goldbox() {
		_super.call(this);
		this.skinParts = ["btnClose","btnGet","imgGet","labelPro","labelPro0","imgPro"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btnClose_i(),this.btnGet_i(),this._Label1_i(),this._Image3_i(),this.imgGet_i(),this.labelPro_i(),this.labelPro0_i(),this._Image4_i(),this.imgPro_i()];
		this.states = [
			new eui.State ("qq",
				[
					new eui.SetProperty("btnClose","visible",false)
				])
		];
	}
	var _proto = goldbox.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 261;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(7,17,9,136);
		t.source = "titleBg";
		t.width = 900;
		t.y = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new ScalerButton();
		this.btnClose = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107;
		t.width = 203;
		t.x = 43;
		t.y = 34;
		t.skinName = goldbox$Skin11;
		return t;
	};
	_proto.btnGet_i = function () {
		var t = new ScalerButton();
		this.btnGet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 100;
		t.height = 154;
		t.horizontalCenter = -8;
		t.width = 392;
		t.skinName = goldbox$Skin12;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 55;
		t.text = "获得神秘礼物";
		t.x = 285;
		t.y = 164.23;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.source = "flash";
		t.width = 630;
		t.x = 133.4;
		t.y = 344.36;
		return t;
	};
	_proto.imgGet_i = function () {
		var t = new eui.Image();
		this.imgGet = t;
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "m_reward";
		t.x = 227.5;
		t.y = 456.86;
		return t;
	};
	_proto.labelPro_i = function () {
		var t = new eui.Label();
		this.labelPro = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 0.5;
		t.size = 35;
		t.stroke = 4;
		t.strokeColor = 0x247ea3;
		t.text = "点满即可打开宝箱，当前：22%";
		t.textColor = 0xffffff;
		t.top = 1193;
		return t;
	};
	_proto.labelPro0_i = function () {
		var t = new eui.Label();
		this.labelPro0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.horizontalCenter = 6;
		t.size = 35;
		t.stroke = 4;
		t.strokeColor = 0x247EA3;
		t.text = "点击宝箱可以使进度条增加";
		t.textColor = 0xFFFFFF;
		t.top = 1023;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.horizontalCenter = 0.5;
		t.source = "m_progress0";
		t.top = 1112;
		t.width = 545;
		return t;
	};
	_proto.imgPro_i = function () {
		var t = new eui.Image();
		this.imgPro = t;
		t.height = 29;
		t.left = 178;
		t.source = "m_progress1";
		t.top = 1113;
		t.width = 192;
		return t;
	};
	return goldbox;
})(eui.Skin);generateEUI.paths['resource/ui/profit/lottery.exml'] = window.lottery = (function (_super) {
	__extends(lottery, _super);
	var lottery$Skin13 = 	(function (_super) {
		__extends(lottery$Skin13, _super);
		function lottery$Skin13() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = lottery$Skin13.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 97;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 221;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 45;
			t.text = "领取";
			t.textColor = 0x993300;
			t.x = 94;
			t.y = 20;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 61;
			t.source = "watchvideos";
			t.width = 51;
			t.x = 30;
			t.y = 14;
			return t;
		};
		return lottery$Skin13;
	})(eui.Skin);

	var lottery$Skin14 = 	(function (_super) {
		__extends(lottery$Skin14, _super);
		function lottery$Skin14() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = lottery$Skin14.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 97;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 221;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 45;
			t.text = "领取";
			t.textColor = 0x993300;
			t.x = 94;
			t.y = 20;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 61;
			t.source = "watchvideos";
			t.width = 51;
			t.x = 30;
			t.y = 14;
			return t;
		};
		return lottery$Skin14;
	})(eui.Skin);

	var lottery$Skin15 = 	(function (_super) {
		__extends(lottery$Skin15, _super);
		function lottery$Skin15() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i(),this._Image2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = lottery$Skin15.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 97;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 221;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 45;
			t.text = "领取";
			t.textColor = 0x993300;
			t.x = 94;
			t.y = 20;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.height = 61;
			t.source = "watchvideos";
			t.width = 51;
			t.x = 30;
			t.y = 14;
			return t;
		};
		return lottery$Skin15;
	})(eui.Skin);

	function lottery() {
		_super.call(this);
		this.skinParts = ["moneyNumber","moneyGroup","labelEnergy","energyGroup","box_0","btnReplay","box_2","btnReplay1","box_1","btnReplay0","skinHead","skinMouth","moneyLabel","skinGroup","closebtn","lab_info"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Image1_i(),this.moneyNumber_i(),this._Image2_i(),this.moneyGroup_i(),this._Image5_i(),this.labelEnergy_i(),this._Image6_i(),this.energyGroup_i(),this._Rect3_i(),this._Image9_i(),this._Image10_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.closebtn_i(),this.lab_info_i()];
	}
	var _proto = lottery.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = -132;
		t.fillColor = 0x0c5a4d;
		t.height = 1000;
		t.horizontalCenter = 1;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x63e8fd;
		t.height = 716;
		t.horizontalCenter = -1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.right = 292;
		t.scale9Grid = new egret.Rectangle(11,11,16,18);
		t.source = "moneybackground";
		t.top = 72;
		t.width = 200;
		return t;
	};
	_proto.moneyNumber_i = function () {
		var t = new eui.Label();
		this.moneyNumber = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 47;
		t.right = 292;
		t.size = 40;
		t.text = "2220";
		t.textAlign = "center";
		t.top = 77;
		t.width = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 81;
		t.right = 463;
		t.source = "money";
		t.top = 48;
		t.width = 81;
		return t;
	};
	_proto.moneyGroup_i = function () {
		var t = new eui.Group();
		this.moneyGroup = t;
		t.height = 74;
		t.right = 230;
		t.top = 53;
		t.width = 74;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "addbg";
		t.width = 74;
		t.x = -4.67;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "add";
		t.width = 45;
		t.x = 11.82;
		t.y = 17;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.8;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.left = 56;
		t.scale9Grid = new egret.Rectangle(11,11,16,18);
		t.source = "moneybackground";
		t.top = 68;
		t.width = 200;
		return t;
	};
	_proto.labelEnergy_i = function () {
		var t = new eui.Label();
		this.labelEnergy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 47;
		t.left = 52;
		t.size = 40;
		t.text = "20/20";
		t.textAlign = "center";
		t.top = 72;
		t.width = 200;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 78;
		t.left = 20;
		t.source = "energy";
		t.top = 51;
		t.width = 71;
		return t;
	};
	_proto.energyGroup_i = function () {
		var t = new eui.Group();
		this.energyGroup = t;
		t.height = 74;
		t.left = 239;
		t.top = 51;
		t.width = 74;
		t.elementsContent = [this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "addbg";
		t.width = 74;
		t.x = -3.33;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "add";
		t.width = 45;
		t.x = 11.82;
		t.y = 17;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x21a886;
		t.height = 16;
		t.horizontalCenter = 0;
		t.verticalCenter = -76;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 545;
		t.horizontalCenter = 8;
		t.source = "shopBg";
		t.top = 173;
		t.width = 700;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 147;
		t.horizontalCenter = -13.5;
		t.source = "shopBoss";
		t.top = 466;
		t.width = 121;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 188;
		t.height = 377;
		t.left = 50;
		t.name = "item0";
		t.width = 250;
		t.elementsContent = [this._Image11_i(),this.box_0_i(),this._Image12_i(),this._Image13_i(),this._Label1_i(),this.btnReplay_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,10,15,20);
		t.source = "gunmodel";
		t.percentWidth = 100;
		return t;
	};
	_proto.box_0_i = function () {
		var t = new eui.Image();
		this.box_0 = t;
		t.height = 181;
		t.source = "rewardBox";
		t.width = 173;
		t.x = 39;
		t.y = 105;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 156;
		t.horizontalCenter = 1;
		t.name = "imagebg";
		t.scale9Grid = new egret.Rectangle(21,23,19,145);
		t.source = "gunchoose";
		t.visible = false;
		t.width = 154;
		t.y = 48;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.horizontalCenter = 0;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = -63.5;
		t.visible = false;
		t.width = 90;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "label";
		t.size = 32;
		t.text = "+500";
		t.textColor = 0xffffff;
		t.visible = false;
		t.x = 83;
		t.y = 166;
		return t;
	};
	_proto.btnReplay_i = function () {
		var t = new ScalerButton();
		this.btnReplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.name = "btn";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 221;
		t.x = 14.5;
		t.y = 244;
		t.skinName = lottery$Skin13;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 85;
		t.name = "confirm";
		t.source = "shopconfirm";
		t.visible = false;
		t.width = 78;
		t.x = 84.5;
		t.y = 252;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.name = "mouth";
		t.visible = false;
		t.width = 70;
		t.x = 112.5;
		t.y = 138;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 188;
		t.height = 377;
		t.name = "item2";
		t.right = 50;
		t.width = 250;
		t.elementsContent = [this._Image16_i(),this.box_2_i(),this._Image17_i(),this._Image18_i(),this._Label2_i(),this.btnReplay1_i(),this._Image19_i(),this._Image20_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,10,15,20);
		t.source = "gunmodel";
		t.percentWidth = 100;
		return t;
	};
	_proto.box_2_i = function () {
		var t = new eui.Image();
		this.box_2 = t;
		t.height = 181;
		t.source = "rewardBox";
		t.width = 173;
		t.x = 39;
		t.y = 105;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 156;
		t.horizontalCenter = 1;
		t.name = "imagebg";
		t.scale9Grid = new egret.Rectangle(21,23,19,145);
		t.source = "gunchoose";
		t.visible = false;
		t.width = 154;
		t.y = 48;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.horizontalCenter = 0;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = -63.5;
		t.visible = false;
		t.width = 90;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "label";
		t.size = 32;
		t.text = "+500";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.x = 83;
		t.y = 166;
		return t;
	};
	_proto.btnReplay1_i = function () {
		var t = new ScalerButton();
		this.btnReplay1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.name = "btn";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 221;
		t.x = 14.5;
		t.y = 244;
		t.skinName = lottery$Skin14;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 85;
		t.name = "confirm";
		t.source = "shopconfirm";
		t.visible = false;
		t.width = 78;
		t.x = 84.5;
		t.y = 252;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.name = "mouth";
		t.visible = false;
		t.width = 70;
		t.x = 113;
		t.y = 138.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 102;
		t.horizontalCenter = -42.5;
		t.verticalCenter = 114;
		t.width = 400;
		t.elementsContent = [this._Image21_i(),this._Label3_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 102;
		t.scale9Grid = new egret.Rectangle(13,12,17,19);
		t.source = "gunmodel";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 82;
		t.size = 45;
		t.text = "终极大奖";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 267;
		t.x = 65;
		t.y = 9;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 188;
		t.height = 377;
		t.horizontalCenter = 0;
		t.name = "item1";
		t.width = 250;
		t.elementsContent = [this._Image22_i(),this.box_1_i(),this._Image23_i(),this._Image24_i(),this._Label4_i(),this._Image25_i(),this.btnReplay0_i(),this._Image26_i(),this.skinGroup_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(14,10,15,20);
		t.source = "gunmodel";
		t.percentWidth = 100;
		return t;
	};
	_proto.box_1_i = function () {
		var t = new eui.Image();
		this.box_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 181;
		t.horizontalCenter = 0.5;
		t.source = "rewardBox";
		t.width = 173;
		t.y = 105;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 156;
		t.horizontalCenter = 1;
		t.name = "imagebg";
		t.scale9Grid = new egret.Rectangle(21,23,19,145);
		t.source = "gunchoose";
		t.visible = false;
		t.width = 154;
		t.y = 48;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = -68.5;
		t.visible = false;
		t.width = 90;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "label";
		t.size = 32;
		t.text = "+500";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.x = 83;
		t.y = 166;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.name = "mouth";
		t.visible = false;
		t.width = 70;
		t.x = 113.5;
		t.y = 134;
		return t;
	};
	_proto.btnReplay0_i = function () {
		var t = new ScalerButton();
		this.btnReplay0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.name = "btn";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 221;
		t.x = 14.5;
		t.y = 244;
		t.skinName = lottery$Skin15;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 85;
		t.name = "confirm";
		t.source = "shopconfirm";
		t.visible = false;
		t.width = 78;
		t.x = 84.5;
		t.y = 252;
		return t;
	};
	_proto.skinGroup_i = function () {
		var t = new eui.Group();
		this.skinGroup = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 92.5;
		t.height = 185;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 293;
		t.y = -136;
		t.elementsContent = [this._Image27_i(),this.skinHead_i(),this.skinMouth_i(),this.moneyLabel_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 185;
		t.scale9Grid = new egret.Rectangle(19,23,25,145);
		t.source = "gunchoose";
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.skinHead_i = function () {
		var t = new eui.Image();
		this.skinHead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.horizontalCenter = 0;
		t.verticalCenter = 0.5;
		t.width = 160;
		return t;
	};
	_proto.skinMouth_i = function () {
		var t = new eui.Image();
		this.skinMouth = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 75;
		t.x = 81;
		t.y = 105;
		return t;
	};
	_proto.moneyLabel_i = function () {
		var t = new eui.Label();
		this.moneyLabel = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "+1000";
		t.textAlign = "center";
		t.visible = false;
		t.width = 157;
		t.x = 13;
		t.y = 140;
		return t;
	};
	_proto.closebtn_i = function () {
		var t = new eui.Label();
		this.closebtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 84;
		t.fontFamily = "Microsoft YaHei";
		t.height = 60;
		t.horizontalCenter = 4.5;
		t.size = 32;
		t.text = "放弃奖励";
		t.textAlign = "center";
		t.textColor = 0x999999;
		t.verticalAlign = "middle";
		t.width = 163;
		return t;
	};
	_proto.lab_info_i = function () {
		var t = new eui.Label();
		this.lab_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "看视频即可领取";
		t.x = 350;
		t.y = 986;
		return t;
	};
	return lottery;
})(eui.Skin);generateEUI.paths['resource/ui/profit/othergame.exml'] = window.othergame = (function (_super) {
	__extends(othergame, _super);
	function othergame() {
		_super.call(this);
		this.skinParts = ["closebtn","list","scroller"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.closebtn_i(),this.scroller_i()];
	}
	var _proto = othergame.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.height = 976;
		t.horizontalCenter = 7;
		t.scale9Grid = new egret.Rectangle(20,0,26,22);
		t.source = "otherbg";
		t.verticalCenter = -34;
		t.width = 720;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.horizontalCenter = 10;
		t.scale9Grid = new egret.Rectangle(19,17,23,11);
		t.source = "upbackground";
		t.verticalCenter = -471;
		t.width = 720;
		return t;
	};
	_proto.closebtn_i = function () {
		var t = new eui.Image();
		this.closebtn = t;
		t.height = 65;
		t.right = 119;
		t.source = "close";
		t.verticalCenter = -472.5;
		t.width = 60;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 866;
		t.horizontalCenter = 7;
		t.verticalCenter = 10;
		t.width = 720;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 0;
		t.width = 672;
		t.x = 24;
		t.y = 27;
		return t;
	};
	return othergame;
})(eui.Skin);generateEUI.paths['resource/ui/profit/othergames.exml'] = window.othergame = (function (_super) {
	__extends(othergame, _super);
	function othergame() {
		_super.call(this);
		this.skinParts = ["labelGame","img","labelDesc","trybtn","labelEnergy"];
		
		this.height = 160;
		this.width = 675;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = othergame.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.width = 675;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.labelGame_i(),this.img_i(),this.labelDesc_i(),this.trybtn_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 147;
		t.scale9Grid = new egret.Rectangle(22,16,27,25);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wholebg";
		t.width = 670;
		t.x = 1;
		t.y = 13;
		return t;
	};
	_proto.labelGame_i = function () {
		var t = new eui.Label();
		this.labelGame = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "滑梯游戏";
		t.textColor = 0x45379c;
		t.width = 138;
		t.x = 139;
		t.y = 44;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 104;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 104;
		t.x = 25;
		t.y = 34.5;
		return t;
	};
	_proto.labelDesc_i = function () {
		var t = new eui.Label();
		this.labelDesc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "水上乐园冲冲冲";
		t.textColor = 0x44369d;
		t.visible = false;
		t.width = 230;
		t.wordWrap = true;
		t.x = 139;
		t.y = 92;
		return t;
	};
	_proto.trybtn_i = function () {
		var t = new eui.Group();
		this.trybtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 165;
		t.x = 478;
		t.y = 63;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(20,16,25,261);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_1";
		t.width = 165;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 44;
		t.size = 40;
		t.text = "试玩";
		t.textColor = 0x97310d;
		t.width = 84;
		t.x = 40.5;
		t.y = 9.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 426;
		t.x = 248;
		t.y = 1;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.labelEnergy_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(60,15,11,43);
		t.source = "rewardbg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.source = "reward";
		t.width = 56;
		t.x = 62;
		t.y = 7.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.scale9Grid = new egret.Rectangle(9,8,15,17);
		t.source = "labelbg";
		t.width = 120;
		t.x = 142.5;
		t.y = 5.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 35;
		t.scale9Grid = new egret.Rectangle(9,8,15,17);
		t.source = "labelbg";
		t.width = 120;
		t.x = 294.5;
		t.y = 5.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.source = "energy";
		t.width = 38;
		t.x = 134;
		t.y = 2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.source = "money";
		t.width = 41;
		t.x = 276.5;
		t.y = 0;
		return t;
	};
	_proto.labelEnergy_i = function () {
		var t = new eui.Label();
		this.labelEnergy = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "+1";
		t.width = 76;
		t.x = 188;
		t.y = 9;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 28;
		t.text = "+100";
		t.width = 95;
		t.x = 325;
		t.y = 9;
		return t;
	};
	return othergame;
})(eui.Skin);generateEUI.paths['resource/ui/profit/requestmessage.exml'] = window.othergame = (function (_super) {
	__extends(othergame, _super);
	var othergame$Skin16 = 	(function (_super) {
		__extends(othergame$Skin16, _super);
		function othergame$Skin16() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = othergame$Skin16.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(29,41,17,196);
			t.source = "btn_1";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 0;
			t.strokeColor = 0xF18613;
			t.text = "我要订阅";
			t.textAlign = "left";
			t.textColor = 0x993300;
			t.verticalCenter = -6;
			return t;
		};
		return othergame$Skin16;
	})(eui.Skin);

	var othergame$Skin17 = 	(function (_super) {
		__extends(othergame$Skin17, _super);
		function othergame$Skin17() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = othergame$Skin17.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Label1_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.scale9Grid = new egret.Rectangle(29,41,17,196);
			t.source = "btn_1";
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 40;
			t.stroke = 0;
			t.strokeColor = 0xF18613;
			t.text = "暂时不要";
			t.textAlign = "left";
			t.textColor = 0x993300;
			t.verticalCenter = -6;
			return t;
		};
		return othergame$Skin17;
	})(eui.Skin);

	function othergame() {
		_super.call(this);
		this.skinParts = ["btnCloseForever","btnGet","btnClose0","btnClose"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.btnCloseForever_i(),this._Image2_i(),this.btnGet_i(),this.btnClose0_i(),this._Image3_i(),this.btnClose_i(),this._Label2_i(),this._Label3_i()];
	}
	var _proto = othergame.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.7;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnCloseForever_i = function () {
		var t = new eui.Group();
		this.btnCloseForever = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.horizontalCenter = 9.5;
		t.top = 1146;
		t.width = 283;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "永不打扰";
		t.textAlign = "center";
		t.textColor = 0x818181;
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 1;
		t.anchorOffsetY = 0;
		t.height = 590;
		t.horizontalCenter = 7;
		t.scale9Grid = new egret.Rectangle(22,5,22,11);
		t.source = "otherbg";
		t.top = 414;
		t.width = 720;
		return t;
	};
	_proto.btnGet_i = function () {
		var t = new ScalerButton();
		this.btnGet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.horizontalCenter = -157;
		t.top = 812;
		t.width = 284;
		t.skinName = othergame$Skin16;
		return t;
	};
	_proto.btnClose0_i = function () {
		var t = new ScalerButton();
		this.btnClose0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124;
		t.horizontalCenter = 179;
		t.top = 812;
		t.width = 284;
		t.skinName = othergame$Skin17;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.horizontalCenter = 7;
		t.scale9Grid = new egret.Rectangle(19,21,23,7);
		t.source = "upbackground";
		t.top = 382;
		t.width = 720;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Image();
		this.btnClose = t;
		t.height = 65;
		t.horizontalCenter = 313;
		t.source = "close";
		t.top = 399;
		t.width = 60;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 45;
		t.text = "消息订阅";
		t.top = 414;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 174;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "您将要订阅我们游戏的消息，当有新版本到来时我们会向您的微信发通知以方便您可以尽快体验到新版本的乐趣，快来订阅吧！";
		t.top = 556;
		t.width = 642;
		return t;
	};
	return othergame;
})(eui.Skin);generateEUI.paths['resource/ui/profit/sign.exml'] = window.sign = (function (_super) {
	__extends(sign, _super);
	var sign$Skin18 = 	(function (_super) {
		__extends(sign$Skin18, _super);
		function sign$Skin18() {
			_super.call(this);
			this.skinParts = ["childGrp"];
			
			this.elementsContent = [this.childGrp_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = sign$Skin18.prototype;

		_proto.childGrp_i = function () {
			var t = new eui.Group();
			this.childGrp = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			t.elementsContent = [this._Image1_i(),this._Image2_i()];
			return t;
		};
		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.anchorOffsetY = 0;
			t.height = 140;
			t.scale9Grid = new egret.Rectangle(26,28,18,235);
			t.source = "btn_1";
			t.width = 400;
			return t;
		};
		_proto._Image2_i = function () {
			var t = new eui.Image();
			t.scaleX = 0.7;
			t.scaleY = 0.7;
			t.source = "watchvideos";
			t.x = 56.5;
			t.y = 38;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.bold = true;
			t.fontFamily = "Microsoft YaHei";
			t.size = 60;
			t.text = "五倍领取";
			t.textColor = 0x993300;
			t.x = 120.17;
			t.y = 36;
			return t;
		};
		return sign$Skin18;
	})(eui.Skin);

	function sign() {
		_super.call(this);
		this.skinParts = ["buttonGet","grpContent","btnclose","buttonGetDouble","lab_info"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this.buttonGet_i(),this._Image2_i(),this._Image3_i(),this.grpContent_i(),this.btnclose_i(),this._Label15_i(),this.buttonGetDouble_i(),this.lab_info_i()];
	}
	var _proto = sign.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.buttonGet_i = function () {
		var t = new eui.Label();
		this.buttonGet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "普通领取";
		t.textAlign = "center";
		t.textColor = 0x818181;
		t.top = 1299;
		t.width = 284;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1060;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(15,17,27,28);
		t.source = "downbackground";
		t.top = 216;
		t.width = 830;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(23,26,18,6);
		t.source = "upbackground";
		t.top = 216;
		t.width = 830;
		return t;
	};
	_proto.grpContent_i = function () {
		var t = new eui.Group();
		this.grpContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 730.3;
		t.width = 793.94;
		t.x = 53;
		t.y = 348;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 205;
		t.name = "item1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 205;
		t.x = 17.669999999999995;
		t.y = 19.350000000000023;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "flash";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 205;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(69,75,24,30);
		t.source = "sign_btn";
		t.width = 205;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = -0.5;
		t.width = 120;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.stroke = 5;
		t.strokeColor = 0x6958d0;
		t.text = "X300";
		t.x = 102.5;
		t.y = 132.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "1";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 205;
		t.name = "item2";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 205;
		t.x = 250.32999999999998;
		t.y = 18.689999999999998;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "flash";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 205;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(55,47,17,19);
		t.source = "sign_today";
		t.width = 205;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = 3.5;
		t.width = 120;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "X300";
		t.x = 102.5;
		t.y = 132.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "1";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 205;
		t.name = "item3";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 205;
		t.x = 14.339999999999996;
		t.y = 256.03999999999996;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "flash";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 205;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(69,75,24,30);
		t.source = "sign_btn";
		t.width = 205;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = 4.5;
		t.width = 120;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "X300";
		t.x = 102.5;
		t.y = 132.5;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "1";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 205;
		t.name = "item4";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 205;
		t.x = 247;
		t.y = 255.38;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "flash";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 205;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(69,75,24,30);
		t.source = "sign_btn";
		t.width = 205;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = 4.5;
		t.width = 120;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "X300";
		t.x = 102.5;
		t.y = 132.5;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "1";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 205;
		t.name = "item5";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 205;
		t.x = 14.339999999999996;
		t.y = 494.69000000000017;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "flash";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 205;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(69,75,24,30);
		t.source = "sign_btn";
		t.width = 205;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = 4.5;
		t.width = 120;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "X300";
		t.x = 102.5;
		t.y = 132.5;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "1";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 205;
		t.name = "item6";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 205;
		t.x = 247;
		t.y = 494.0300000000001;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Label11_i(),this._Label12_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "flash";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 205;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(69,75,24,30);
		t.source = "sign_btn";
		t.width = 205;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 55;
		t.height = 110;
		t.horizontalCenter = 0.5;
		t.name = "icon";
		t.source = "money";
		t.verticalCenter = 5.5;
		t.width = 120;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "X300";
		t.x = 102.5;
		t.y = 132.5;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "1";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 615;
		t.name = "item7";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 275;
		t.x = 495.66999999999996;
		t.y = 59.04000000000002;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this._Label13_i(),this._Label14_i(),this._Image24_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 2.5;
		t.scaleY = 2.5;
		t.source = "flash";
		t.x = -26.66;
		t.y = 101.35;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.name = "btn";
		t.scale9Grid = new egret.Rectangle(69,75,24,30);
		t.source = "sign_btn";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "day";
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "7";
		t.x = 25.5;
		t.y = 17.5;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.name = "num";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.stroke = 5;
		t.strokeColor = 0x6958D0;
		t.text = "烈焰使者";
		t.x = 77.5;
		t.y = 552.49;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.name = "icon";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "money";
		t.width = 120;
		t.x = 55.84;
		t.y = 223.61;
		return t;
	};
	_proto.btnclose_i = function () {
		var t = new eui.Image();
		this.btnclose = t;
		t.height = 58;
		t.right = 68;
		t.source = "close";
		t.top = 237;
		t.width = 58;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 60;
		t.text = "签到好礼";
		t.x = 330;
		t.y = 235;
		return t;
	};
	_proto.buttonGetDouble_i = function () {
		var t = new ScalerButton();
		this.buttonGetDouble = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = 0;
		t.top = 1103;
		t.width = 400;
		t.skinName = sign$Skin18;
		return t;
	};
	_proto.lab_info_i = function () {
		var t = new eui.Label();
		this.lab_info = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "看视频五倍领取";
		t.x = 338;
		t.y = 1064;
		return t;
	};
	return sign;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skipbanner.exml'] = window.skipbanner = (function (_super) {
	__extends(skipbanner, _super);
	function skipbanner() {
		_super.call(this);
		this.skinParts = ["content"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.content_i()];
	}
	var _proto = skipbanner.prototype;

	_proto.content_i = function () {
		var t = new eui.Image();
		this.content = t;
		t.bottom = 10;
		t.height = 330;
		t.horizontalCenter = 0;
		t.width = 960;
		return t;
	};
	return skipbanner;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skipbox.exml'] = window.skipbox = (function (_super) {
	__extends(skipbox, _super);
	function skipbox() {
		_super.call(this);
		this.skinParts = ["btnClose","list","scroller"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.btnClose_i(),this.scroller_i()];
	}
	var _proto = skipbox.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(3,3,3,3);
		t.source = "color_1";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -5;
		t.size = 60;
		t.stroke = 0;
		t.strokeColor = 0x8a4726;
		t.text = "热门推荐";
		t.top = 79;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Group();
		this.btnClose = t;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = -333;
		t.top = 72;
		t.width = 184;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(25,0,24,55);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cr_p5";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.scaleX = -1;
		t.source = "g_back";
		t.width = 50;
		t.x = 71;
		t.y = 8.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "返回";
		t.x = 86;
		t.y = 11;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 25;
		t.horizontalCenter = 0;
		t.top = 175;
		t.width = 850;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return skipbox;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skipboxitem.exml'] = window.skipboxitem = (function (_super) {
	__extends(skipboxitem, _super);
	function skipboxitem() {
		_super.call(this);
		this.skinParts = ["img","labelName","grp"];
		
		this.height = 470;
		this.width = 410;
		this.elementsContent = [this.grp_i()];
	}
	var _proto = skipboxitem.prototype;

	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 412;
		t.width = 341;
		t.x = 37;
		t.y = 24;
		t.elementsContent = [this._Image1_i(),this.img_i(),this._Image2_i(),this.labelName_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 417;
		t.scale9Grid = new egret.Rectangle(34,42,13,265);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "box_p";
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 278;
		t.x = 31;
		t.y = 38;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.scale9Grid = new egret.Rectangle(34,35,8,9);
		t.source = "";
		t.width = 276;
		t.x = 31;
		t.y = 38;
		return t;
	};
	_proto.labelName_i = function () {
		var t = new eui.Label();
		this.labelName = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "全民变变变";
		t.x = -91;
		t.y = 345.5;
		return t;
	};
	return skipboxitem;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skiplike.exml'] = window.skiplike = (function (_super) {
	__extends(skiplike, _super);
	function skiplike() {
		_super.call(this);
		this.skinParts = ["rect","list","scroller"];
		
		this.height = 180;
		this.width = 900;
		this.elementsContent = [this.rect_i(),this.scroller_i()];
	}
	var _proto = skiplike.prototype;

	_proto.rect_i = function () {
		var t = new eui.Rect();
		this.rect = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.width = 900;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.height = 140;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 0;
		t.width = 805;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 140;
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return skiplike;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skiplikefour.exml'] = window.skiplikesix = (function (_super) {
	__extends(skiplikesix, _super);
	function skiplikesix() {
		_super.call(this);
		this.skinParts = ["list","scroller"];
		
		this.height = 600;
		this.width = 600;
		this.elementsContent = [this._Rect1_i(),this.scroller_i()];
	}
	var _proto = skiplikesix.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.height = 600;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 600;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.width = 600;
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return skiplikesix;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skiplikefouritem.exml'] = window.skiplikesixitem = (function (_super) {
	__extends(skiplikesixitem, _super);
	function skiplikesixitem() {
		_super.call(this);
		this.skinParts = ["img"];
		
		this.height = 300;
		this.width = 290;
		this.elementsContent = [this.img_i(),this._Image1_i()];
	}
	var _proto = skiplikesixitem.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 250;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 250;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 250;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 250;
		return t;
	};
	return skiplikesixitem;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skiplikeitem.exml'] = window.skiplikeitem = (function (_super) {
	__extends(skiplikeitem, _super);
	function skiplikeitem() {
		_super.call(this);
		this.skinParts = ["img"];
		
		this.height = 140;
		this.width = 140;
		this.elementsContent = [this.img_i(),this._Image1_i()];
	}
	var _proto = skiplikeitem.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 140;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 140;
		t.scale9Grid = new egret.Rectangle(34,31,8,15);
		t.source = "";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return skiplikeitem;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skipscreenad.exml'] = window.skipscreenad = (function (_super) {
	__extends(skipscreenad, _super);
	function skipscreenad() {
		_super.call(this);
		this.skinParts = ["img","labelTime"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this.img_i(),this._Image1_i(),this.labelTime_i()];
	}
	var _proto = skipscreenad.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 65;
		t.left = 25;
		t.scale9Grid = new egret.Rectangle(22,6,20,43);
		t.source = "sr_b1";
		t.top = 60;
		t.width = 230;
		return t;
	};
	_proto.labelTime_i = function () {
		var t = new eui.Label();
		this.labelTime = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35.33;
		t.left = 79;
		t.size = 34;
		t.text = "4秒退出";
		t.top = 72;
		return t;
	};
	return skipscreenad;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skipwxmenu.exml'] = window.skipwxmenu = (function (_super) {
	__extends(skipwxmenu, _super);
	function skipwxmenu() {
		_super.call(this);
		this.skinParts = ["list","scroller","btnExit"];
		
		this.height = 1600;
		this.width = 900;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this._Label1_i(),this._Label2_i(),this._Rect3_i(),this.scroller_i(),this.btnExit_i()];
	}
	var _proto = skipwxmenu.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xeceaed;
		t.height = 200;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "小程序";
		t.textColor = 0x000000;
		t.y = 134;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "最近使用";
		t.textColor = 0x808080;
		t.x = 39;
		t.y = 239;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf3f2f3;
		t.height = 6;
		t.width = 870;
		t.x = 30;
		t.y = 288;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.bottom = 0;
		t.top = 294;
		t.width = 900;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.height = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnExit_i = function () {
		var t = new eui.Group();
		this.btnExit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87;
		t.width = 77;
		t.x = 9;
		t.y = 109;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "exit";
		t.x = 27;
		t.y = 24.120000000000005;
		return t;
	};
	return skipwxmenu;
})(eui.Skin);generateEUI.paths['resource/ui/skip/skipwxmenuitem.exml'] = window.skipwxmenuitem = (function (_super) {
	__extends(skipwxmenuitem, _super);
	function skipwxmenuitem() {
		_super.call(this);
		this.skinParts = ["labelName","img","imgStar"];
		
		this.height = 233;
		this.width = 900;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labelName_i(),this.img_i(),this._Image1_i(),this.imgStar_i()];
	}
	var _proto = skipwxmenuitem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf3f2f3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.height = 220;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 7;
		return t;
	};
	_proto.labelName_i = function () {
		var t = new eui.Label();
		this.labelName = t;
		t.fontFamily = "Microsoft YaHei";
		t.left = 217;
		t.size = 40;
		t.text = "升降机";
		t.textColor = 0x000000;
		t.top = 96.5;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 130;
		t.width = 130;
		t.x = 25;
		t.y = 52;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.source = "wx_icon";
		t.width = 130;
		t.x = 25;
		t.y = 52;
		return t;
	};
	_proto.imgStar_i = function () {
		var t = new eui.Image();
		this.imgStar = t;
		t.source = "star";
		t.x = 799;
		t.y = 94;
		return t;
	};
	return skipwxmenuitem;
})(eui.Skin);