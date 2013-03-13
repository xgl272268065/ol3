goog.provide('ol.test.geom.MultiLineString');

describe('ol.geom.MultiLineString', function() {

  describe('constructor', function() {

    it('creates a multi-linestring from an array', function() {
      var multi = new ol.geom.MultiLineString([
        [[10, 20], [30, 40]],
        [[20, 30], [40, 50]]]);
      expect(multi).to.be.a(ol.geom.MultiLineString);
      expect(multi).to.be.a(ol.geom.Geometry);
    });

    it('throws when given with insufficient dimensions', function() {
      expect(function() {
        var multi = new ol.geom.MultiLineString([1]);
      }).to.throwException();
    });

  });

  describe('#components', function() {

    it('is an array of linestrings', function() {
      var multi = new ol.geom.MultiLineString([
        [[10, 20], [30, 40]],
        [[20, 30], [40, 50]]]);

      expect(multi.components.length).to.be(2);
      expect(multi.components[0]).to.be.a(ol.geom.LineString);
      expect(multi.components[1]).to.be.a(ol.geom.LineString);

    });

  });

  describe('#dimension', function() {

    it('can be 2', function() {
      var multi = new ol.geom.MultiLineString([
        [[10, 20], [30, 40]],
        [[20, 30], [40, 50]]]);
      expect(multi.dimension).to.be(2);
    });

    it('can be 3', function() {
      var multi = new ol.geom.MultiLineString([
        [[10, 20, 30], [30, 40, 50]],
        [[20, 30, 40], [40, 50, 60]]]);
      expect(multi.dimension).to.be(3);
    });

  });

  describe('#getBounds()', function() {

    it('returns the bounding extent', function() {
      var multi = new ol.geom.MultiLineString([
        [[10, 20], [30, 40]],
        [[20, 30], [40, 50]]]);
      var bounds = multi.getBounds();
      expect(bounds.minX).to.be(10);
      expect(bounds.minY).to.be(20);
      expect(bounds.maxX).to.be(40);
      expect(bounds.maxY).to.be(50);
    });

  });

  describe('#getCoordinates', function() {

    it('returns an array', function() {
      var coordinates = [
        [[10, 20], [30, 40]],
        [[20, 30], [40, 50]]
      ];
      var multi = new ol.geom.MultiLineString(coordinates);
      expect(multi.getCoordinates()).to.eql(coordinates);
    });

  });

});

goog.require('ol.geom.Geometry');
goog.require('ol.geom.LineString');
goog.require('ol.geom.MultiLineString');
