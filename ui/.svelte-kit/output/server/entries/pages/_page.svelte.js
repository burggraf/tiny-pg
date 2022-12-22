import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from "../../chunks/index.js";
import "@ionic/core";
import "../../chunks/platform.js";
import * as allIonicIcons from "ionicons/icons";
const extensions = [
  {
    "package": "(default)",
    name: "plpgsql",
    desc: "PL/pgSQL procedural language",
    size: 0
  },
  {
    "package": "postgis",
    name: "address_standardizer",
    desc: "Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.",
    size: 0
  },
  {
    "package": "postgis",
    name: "address_standardizer_data_us",
    desc: "Address Standardizer US dataset example",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "adminpack",
    desc: "administrative functions for PostgreSQL",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "amcheck",
    desc: "functions for verifying relation integrity",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "autoinc",
    desc: "functions for autoincrementing fields",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "bloom",
    desc: "bloom access method - signature file based index",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "btree_gin",
    desc: "support for indexing common datatypes in GIN",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "btree_gist",
    desc: "support for indexing common datatypes in GiST",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "citext",
    desc: "data type for case-insensitive character strings",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "cube",
    desc: "data type for multidimensional cubes",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "dblink",
    desc: "connect to other PostgreSQL databases from within a database",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "dict_int",
    desc: "text search dictionary template for integers",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "dict_xsyn",
    desc: "text search dictionary template for extended synonym processing",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "earthdistance",
    desc: "calculate great-circle distances on the surface of the Earth",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "file_fdw",
    desc: "foreign-data wrapper for flat file access",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "fuzzystrmatch",
    desc: "determine similarities and distance between strings",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "hstore",
    desc: "data type for storing sets of (key, value) pairs",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "insert_username",
    desc: "functions for tracking who changed a table",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "intagg",
    desc: "integer aggregator and enumerator (obsolete)",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "intarr",
    desc: "functions, operators, and index support for 1-D arrays of integers",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "isn",
    desc: "data types for international product numbering standards",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "lo",
    desc: "Large Object maintenance",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "ltree",
    desc: "data type for hierarchical tree-like structures",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "moddatetime",
    desc: "functions for tracking last modification time",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "old_snapshot",
    desc: "utilities in support of old_snapshot_threshold",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pageinspect",
    desc: "inspect the contents of database pages at a low level",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_buf",
    desc: "examine the shared buffer cache",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_freespacemap",
    desc: "examine the free space map (FSM)",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_prewarm",
    desc: "prewarm relation data",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_stat_statements",
    desc: "track planning and execution statistics of all SQL statements executed",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_surgery",
    desc: "extension to perform surgery on a damaged relation",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_trg",
    desc: "text similarity measurement and index searching based on trigrams",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_visibility",
    desc: "examine the visibility map (VM) and page-level visibility info",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pg_walinspect",
    desc: "functions to inspect contents of PostgreSQL Write-Ahead Log",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pgcrypto",
    desc: "cryptographic functions",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pgrowlocks",
    desc: "show row-level locking information",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "pgstattuple",
    desc: "show tuple-level statistics",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "postgres_fdw",
    desc: "foreign-data wrapper for remote PostgreSQL servers",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "refint",
    desc: "functions for implementing referential integrity (obsolete)",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "seg",
    desc: "data type for representing line segments or floating-point intervals",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "sslinfo",
    desc: "information about SSL certificates",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "tablefunc",
    desc: "functions that manipulate whole tables, including crosstab",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "tcn",
    desc: "Triggered change notifications",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "tsm_system_rows",
    desc: "TABLESAMPLE method which accepts number of rows as a limit",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "tsm_system_time",
    desc: "TABLESAMPLE method which accepts time in milliseconds as a limit",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "unaccent",
    desc: "text search dictionary that removes accents",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "uuid-ossp",
    desc: "generate universally unique identifiers (UUIDs)",
    size: 0
  },
  {
    "package": "postgresql15-contrib-jit",
    name: "xml2",
    desc: "XPath querying and XSLT",
    size: 0
  },
  {
    "package": "postgis",
    name: "postgis",
    desc: "PostGIS geometry and geography spatial types and functions",
    size: 0
  },
  {
    "package": "postgis",
    name: "postgis_raster",
    desc: "PostGIS raster types and functions",
    size: 0
  },
  {
    "package": "postgis",
    name: "postgis_tiger_geocoder",
    desc: "PostGIS tiger geocoder and reverse geocoder",
    size: 0
  },
  {
    "package": "postgis",
    name: "postgis_topology",
    desc: "PostGIS topology spatial types and functions",
    size: 0
  },
  {
    "package": "postgresql15-plperl-contrib",
    name: "hstore_plperl",
    desc: "transform between hstore and plperl",
    size: 0
  },
  {
    "package": "postgresql15-plperl-contrib",
    name: "hstore_plperlu",
    desc: "transform between hstore and plperlu",
    size: 0
  },
  {
    "package": "postgresql15-plperl-contrib",
    name: "plperl",
    desc: "PL/Perl procedural language",
    size: 0
  },
  {
    "package": "postgresql15-plperl-contrib",
    name: "plperlu",
    desc: "PL/PerlU untrusted procedural language",
    size: 0
  },
  {
    "package": "postgresql15-pltcl",
    name: "pltcl",
    desc: "PL/Tcl procedural language",
    size: 0
  },
  {
    "package": "postgresql15-pltcl",
    name: "pltclu",
    desc: "PL/TclU untrusted procedural language",
    size: 0
  },
  {
    "package": "postgresql15-plpython3",
    name: "plpython3u",
    desc: "PL/Python3U untrusted procedural language",
    size: 0
  },
  {
    "package": "postgresql15-plpython3-contrib",
    name: "hstore_plpython3u",
    desc: "transform between hstore and plpython3u",
    size: 0
  },
  {
    "package": "postgresql15-plpython3-contrib",
    name: "ltree_plpython3u",
    desc: "transform between ltree and plpython3u",
    size: 0
  },
  {
    "package": "postgresql15-plpython3-contrib",
    name: "plpython3u",
    desc: "",
    size: 0
  },
  {
    "package": "postgresql-mysql_fdw",
    name: "mysql_fdw",
    desc: "Foreign data wrapper for querying a MySQL server",
    size: 0
  },
  {
    "package": "postgresql-citus-bitcode",
    name: "citus",
    desc: "Citus distributed database",
    size: 0
  },
  {
    "package": "postgresql-citus-bitcode",
    name: "citus_columnar",
    desc: "Citus Columnar extension",
    size: 0
  },
  {
    "package": "postgresql-temporal_tables",
    name: "temporal_tables",
    desc: "temporal tables",
    size: 0
  },
  {
    "package": "postgresql-shared_ispell",
    name: "shared_ispell",
    desc: "Provides shared ispell dictionaries.",
    size: 0
  },
  {
    "package": "postgresql-plpgsql_check",
    name: "plpgsql_check",
    desc: "extended check for plpgsql functions",
    size: 0
  },
  {
    "package": "postgresql-url_encode",
    name: "url_encode",
    desc: "url_encode, url_decode functions",
    size: 0
  },
  {
    "package": "postgresql-uint",
    name: "uint",
    desc: "unsigned integer types",
    size: 0
  },
  {
    "package": "postgresql-orafce",
    name: "orafce",
    desc: "Functions and operators that emulate a subset of functions and packages from the Oracle RDBMS",
    size: 0
  },
  {
    "package": "postgresql-rum",
    name: "rum",
    desc: "RUM index access method",
    size: 0
  },
  {
    "package": "postgresql-bdr-extension",
    name: "bdr",
    desc: "Bi-directional replication for PostgreSQL",
    size: 0
  },
  {
    "package": "postgresql-hypopg",
    name: "hypopg",
    desc: "Hypothetical indexes for PostgreSQL",
    size: 0
  },
  {
    "package": "postgresql-pllua",
    name: "plluau",
    desc: "Lua as an untrusted procedural language",
    size: 0
  },
  {
    "package": "postgresql-sequential-uuids",
    name: "sequential_uuids",
    desc: "generator of sequential UUIDs",
    size: 0
  },
  {
    "package": "postgresql-pg_cron",
    name: "pg_cron",
    desc: "Job scheduler for PostgreSQL",
    size: 0
  },
  {
    "package": "(special)",
    name: "pgsodium",
    desc: "",
    size: 0
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let installed_packages = [];
  let total_size = 0;
  let installed_extensions = [];
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>Main Page</ion-title></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}"><ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql15") ? "disabled" : ""}>Install PostgreSQL 15</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql14") ? "disabled" : ""}>Install PostgreSQL 14</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql13") ? "disabled" : ""}>Install PostgreSQL 13</ion-button>

	<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}" ${installed_packages.includes("postgresql12") ? "disabled" : ""}>Install PostgreSQL 12</ion-button>

	<h3>Extension Packs:</h3>
	<ion-grid>${each(extensions, (extension) => {
    return `<ion-row><ion-col><ion-icon size="${"large"}"${add_attribute(
      "icon",
      installed_packages.includes(extension.package) ? allIonicIcons.radioButtonOnOutline : allIonicIcons.radioButtonOffOutline,
      0
    )}></ion-icon>
					${escape(extension.name)}</ion-col>
				<ion-col>${escape(extension.package)}</ion-col>
				<ion-col>${escape(extension.size)}</ion-col>
			</ion-row>`;
  })}</ion-grid>

	

	

	

	<br>** = requires PostgreSQL restart<br>

	<pre id="${"output"}"></pre>

	Installed: 
	<div>${escape(JSON.stringify(installed_packages))}</div>
	<div>Total size: ${escape(total_size.toLocaleString())} bytes</div>
	<div>Extensions: ${escape(JSON.stringify(extensions))}</div>
	<div>Installed Extensions: ${escape(JSON.stringify(installed_extensions))}</div></ion-content>`;
});
export {
  Page as default
};
