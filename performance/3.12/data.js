window.BENCHMARK_DATA = {
  "lastUpdate": 1773062915026,
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
        "date": 1773061308111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 16133.095832331719,
            "unit": "iter/sec",
            "range": "stddev: 0.000004251346360461486",
            "extra": "mean: 61.9843835549491 usec\nrounds: 2469"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 434.65944711016266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001222432097313518",
            "extra": "mean: 2.300651709398034 msec\nrounds: 351"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 436.5105808336611,
            "unit": "iter/sec",
            "range": "stddev: 0.00002959494766666697",
            "extra": "mean: 2.2908952128724343 msec\nrounds: 404"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6820.050474454585,
            "unit": "iter/sec",
            "range": "stddev: 0.00001848833693089973",
            "extra": "mean: 146.62648080767644 usec\nrounds: 1537"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 431.33439128301774,
            "unit": "iter/sec",
            "range": "stddev: 0.00007562944396560713",
            "extra": "mean: 2.3183868947372095 msec\nrounds: 399"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 175237.53567496905,
            "unit": "iter/sec",
            "range": "stddev: 7.523768464250655e-7",
            "extra": "mean: 5.706539961020691 usec\nrounds: 7745"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 432.56706869158137,
            "unit": "iter/sec",
            "range": "stddev: 0.000026929835542591982",
            "extra": "mean: 2.3117802356632837 msec\nrounds: 314"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 16.991882128308102,
            "unit": "iter/sec",
            "range": "stddev: 0.0031298702494441735",
            "extra": "mean: 58.85163235295883 msec\nrounds: 17"
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
        "date": 1773061308111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 16133.095832331719,
            "unit": "iter/sec",
            "range": "stddev: 0.000004251346360461486",
            "extra": "mean: 61.9843835549491 usec\nrounds: 2469"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 434.65944711016266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001222432097313518",
            "extra": "mean: 2.300651709398034 msec\nrounds: 351"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 436.5105808336611,
            "unit": "iter/sec",
            "range": "stddev: 0.00002959494766666697",
            "extra": "mean: 2.2908952128724343 msec\nrounds: 404"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6820.050474454585,
            "unit": "iter/sec",
            "range": "stddev: 0.00001848833693089973",
            "extra": "mean: 146.62648080767644 usec\nrounds: 1537"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 431.33439128301774,
            "unit": "iter/sec",
            "range": "stddev: 0.00007562944396560713",
            "extra": "mean: 2.3183868947372095 msec\nrounds: 399"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 175237.53567496905,
            "unit": "iter/sec",
            "range": "stddev: 7.523768464250655e-7",
            "extra": "mean: 5.706539961020691 usec\nrounds: 7745"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 432.56706869158137,
            "unit": "iter/sec",
            "range": "stddev: 0.000026929835542591982",
            "extra": "mean: 2.3117802356632837 msec\nrounds: 314"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 16.991882128308102,
            "unit": "iter/sec",
            "range": "stddev: 0.0031298702494441735",
            "extra": "mean: 58.85163235295883 msec\nrounds: 17"
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
        "date": 1773062914384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_from_dict.py::test_basic_scenario",
            "value": 15811.347333956219,
            "unit": "iter/sec",
            "range": "stddev: 0.00000431833248686497",
            "extra": "mean: 63.24571707133488 usec\nrounds: 2718"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_union_matching",
            "value": 433.70391057190744,
            "unit": "iter/sec",
            "range": "stddev: 0.00002530009249637848",
            "extra": "mean: 2.3057205056817245 msec\nrounds: 352"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_strict_unions_match",
            "value": 433.8297669797312,
            "unit": "iter/sec",
            "range": "stddev: 0.00008413060282032782",
            "extra": "mean: 2.305051603447766 msec\nrounds: 406"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_collection_of_union",
            "value": 6803.143357630388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060002347287976555",
            "extra": "mean: 146.99087575133964 usec\nrounds: 2825"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_type_hooks",
            "value": 428.3047508594603,
            "unit": "iter/sec",
            "range": "stddev: 0.000028632061814693307",
            "extra": "mean: 2.334786149332558 msec\nrounds: 375"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_casting",
            "value": 167519.51792451058,
            "unit": "iter/sec",
            "range": "stddev: 9.181744178479736e-7",
            "extra": "mean: 5.9694536636061155 usec\nrounds: 10208"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_forward_references",
            "value": 433.9663000581211,
            "unit": "iter/sec",
            "range": "stddev: 0.00002566666547041577",
            "extra": "mean: 2.304326395542857 msec\nrounds: 359"
          },
          {
            "name": "tests/performance/test_from_dict.py::test_parsing_multiple_items",
            "value": 17.0883166555287,
            "unit": "iter/sec",
            "range": "stddev: 0.0025710523698989156",
            "extra": "mean: 58.51951483333866 msec\nrounds: 18"
          }
        ]
      }
    ]
  }
}