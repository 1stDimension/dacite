window.BENCHMARK_DATA = {
  "lastUpdate": 1773062915796,
  "repoUrl": "https://github.com/1stDimension/dacite",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9898ccbb783e7e6a35ae165e7deb9fa84edfe21c",
          "message": "Merge pull request #228 from plonerma/bug/#227 - Improving type casting from list of values to mixed tuples\n\nImproving type casting from list of values to mixed tuples",
          "timestamp": "2025-03-17T16:24:48+01:00",
          "tree_id": "a508830a620f8cf669c48b9668257d8805536b57",
          "url": "https://github.com/1stDimension/dacite/commit/9898ccbb783e7e6a35ae165e7deb9fa84edfe21c"
        },
        "date": 1773061305701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 17922.761498179367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032711342252392485",
            "extra": "mean: 55.79497334166848 usec\nrounds: 2701"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 479.7445424114226,
            "unit": "iter/sec",
            "range": "stddev: 0.00002894946465752548",
            "extra": "mean: 2.0844426806265015 msec\nrounds: 382"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 481.3734296514007,
            "unit": "iter/sec",
            "range": "stddev: 0.000017955715179617344",
            "extra": "mean: 2.0773892749422758 msec\nrounds: 451"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 7506.224336583211,
            "unit": "iter/sec",
            "range": "stddev: 0.000011435497236795705",
            "extra": "mean: 133.22277021834844 usec\nrounds: 2881"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 472.47160248204045,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835454177088052",
            "extra": "mean: 2.1165293210146148 msec\nrounds: 433"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 180974.38937248604,
            "unit": "iter/sec",
            "range": "stddev: 6.965682754800801e-7",
            "extra": "mean: 5.525643730405272 usec\nrounds: 10391"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 477.49457886648844,
            "unit": "iter/sec",
            "range": "stddev: 0.000027736162638149134",
            "extra": "mean: 2.094264614215879 msec\nrounds: 394"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 19.23236066968379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912224404418873",
            "extra": "mean: 51.99569710526033 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9898ccbb783e7e6a35ae165e7deb9fa84edfe21c",
          "message": "Merge pull request #228 from plonerma/bug/#227 - Improving type casting from list of values to mixed tuples\n\nImproving type casting from list of values to mixed tuples",
          "timestamp": "2025-03-17T16:24:48+01:00",
          "tree_id": "a508830a620f8cf669c48b9668257d8805536b57",
          "url": "https://github.com/1stDimension/dacite/commit/9898ccbb783e7e6a35ae165e7deb9fa84edfe21c"
        },
        "date": 1773061305701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 17922.761498179367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032711342252392485",
            "extra": "mean: 55.79497334166848 usec\nrounds: 2701"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 479.7445424114226,
            "unit": "iter/sec",
            "range": "stddev: 0.00002894946465752548",
            "extra": "mean: 2.0844426806265015 msec\nrounds: 382"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 481.3734296514007,
            "unit": "iter/sec",
            "range": "stddev: 0.000017955715179617344",
            "extra": "mean: 2.0773892749422758 msec\nrounds: 451"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 7506.224336583211,
            "unit": "iter/sec",
            "range": "stddev: 0.000011435497236795705",
            "extra": "mean: 133.22277021834844 usec\nrounds: 2881"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 472.47160248204045,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835454177088052",
            "extra": "mean: 2.1165293210146148 msec\nrounds: 433"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 180974.38937248604,
            "unit": "iter/sec",
            "range": "stddev: 6.965682754800801e-7",
            "extra": "mean: 5.525643730405272 usec\nrounds: 10391"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 477.49457886648844,
            "unit": "iter/sec",
            "range": "stddev: 0.000027736162638149134",
            "extra": "mean: 2.094264614215879 msec\nrounds: 394"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 19.23236066968379,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912224404418873",
            "extra": "mean: 51.99569710526033 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "23144389+1stDimension@users.noreply.github.com",
            "name": "1stDimension",
            "username": "1stDimension"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ede62dec1ea36969ea5032536d61c84458c8ceba",
          "message": "Update union type checks for Python 3.14 compatibility",
          "timestamp": "2026-03-09T14:27:56+01:00",
          "tree_id": "ccc9a3a81a434e40bbe33f74a91392f21fda41d8",
          "url": "https://github.com/1stDimension/dacite/commit/ede62dec1ea36969ea5032536d61c84458c8ceba"
        },
        "date": 1773062914770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 17393.28730138326,
            "unit": "iter/sec",
            "range": "stddev: 0.000005850667499013634",
            "extra": "mean: 57.49344460724636 usec\nrounds: 2726"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 479.6581592645084,
            "unit": "iter/sec",
            "range": "stddev: 0.000035082857259514515",
            "extra": "mean: 2.084818074466545 msec\nrounds: 376"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 479.7582697361434,
            "unit": "iter/sec",
            "range": "stddev: 0.00002699643405216534",
            "extra": "mean: 2.0843830384622204 msec\nrounds: 442"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 7295.123607169334,
            "unit": "iter/sec",
            "range": "stddev: 0.00001387057007658459",
            "extra": "mean: 137.07786925189905 usec\nrounds: 2631"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 469.4557784426321,
            "unit": "iter/sec",
            "range": "stddev: 0.00002195229330575717",
            "extra": "mean: 2.130126086246909 msec\nrounds: 429"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 175825.74502736004,
            "unit": "iter/sec",
            "range": "stddev: 8.999727551285602e-7",
            "extra": "mean: 5.687449240407831 usec\nrounds: 9683"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 471.8115909123264,
            "unit": "iter/sec",
            "range": "stddev: 0.00001971410057021128",
            "extra": "mean: 2.11949010846964 msec\nrounds: 378"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 18.881156656640286,
            "unit": "iter/sec",
            "range": "stddev: 0.0005531262373065258",
            "extra": "mean: 52.96285699998742 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}