import "../componentes/Error404/Error404.css";
import inView from 'in-view';
import $ from 'jquery';
import React, { useEffect } from 'react';

const Error404 = () => {
  const formatThousandsNoRounding = function(n, dp) {
    const e = '',
      s = e + n,
      l = s.length,
      b = n < 0 ? 1 : 0,
      i = s.lastIndexOf(','),
      j = i == -1 ? l : i,
      r = e,
      d = s.substr(j + 1, dp);
    while ((j -= 3) > b) {
      r = '.' + s.substr(j, 3) + r;
    }
    return (
      s.substr(0, j + 3) +
      r +
      (dp
        ? ',' +
          d +
          (d.length < dp ? ('00000').substr(0, dp - d.length) : e)
        : e)
    );
  };

  useEffect(() => {
    let hasRun = false;

    inView('#countUp').on('scroll', function() {
      if (hasRun === false) {
        $('.number').each(function() {
          const $this = $(this),
            countTo = $this.attr('data-count');

          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: 'linear',
              step: function() {
                $this.text(
                  formatThousandsNoRounding(Math.floor(this.countNum))
                );
              },
              complete: function() {
                $this.text(formatThousandsNoRounding(this.countNum));
              },
            }
          );
        });
        hasRun = true;
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="xs-12 md-6 mx-auto">
          <div id="countUp">
            <div className="number" data-count="404">
              0
            </div>
            <div className="text">Page not found</div>
            <div className="text">This may not mean anything.</div>
            <div className="text">
              I'm probably working on something that has blown up.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;