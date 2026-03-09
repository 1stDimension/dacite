window.BENCHMARK_DATA = {
  "lastUpdate": 1773061310114,
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
      }
    ]
  }
}