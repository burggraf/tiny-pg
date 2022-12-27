import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, f as each } from "../../chunks/index.js";
import "@ionic/core";
import { s as servers, a as server } from "../../chunks/servers.store.js";
import * as allIonicIcons from "ionicons/icons";
const extensions_list = [
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
    name: "intarray",
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
    name: "pg_buffercache",
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
    name: "pg_trgm",
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
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid375.svelte-1vmm8g4{max-width:375px}.header_col.svelte-1vmm8g4{font-weight:bold}.inputItemWithIcon.svelte-1vmm8g4{height:50px;border:1px solid rgb(212, 212, 212);background-color:var(--ion-background-color) !important;border-radius:5px}.inputIcon.svelte-1vmm8g4{padding-right:10px}.gridItem.svelte-1vmm8g4{--padding-start:0px;--padding-end:0px;--inner-padding-end:0px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_servers;
  let $server, $$unsubscribe_server;
  $$unsubscribe_servers = subscribe(servers, (value) => value);
  $$unsubscribe_server = subscribe(server, (value) => $server = value);
  const extensions = extensions_list;
  let local_server;
  let installed_extensions = [];
  let pg_version = "";
  let server_type = "";
  let display_section = "log";
  let output = "";
  let new_server_type = "STANDALONE";
  const get_info = async (script) => {
    const response = await fetch(`${$server.url}/cgi-bin/${script}.sh`);
    const data = await response.text();
    return data;
  };
  const set_installed_extensions = (installed_extensions2) => {
    for (let i = 0; i < installed_extensions2.length; i++) {
      const e = installed_extensions2[i];
      const index = extensions.findIndex((ext) => ext.name === e.name);
      if (index > -1) {
        extensions[index].installed = e.default_version;
        extensions[index].enabled = e.installed_version !== null;
      } else {
        console.error("set_installed_extensions could not find extension", e);
      }
    }
  };
  const reload = async () => {
    try {
      const installed_extensions_output = await get_info("get_extensions");
      try {
        installed_extensions = JSON.parse(installed_extensions_output);
        set_installed_extensions(installed_extensions);
      } catch (err) {
        console.error("error parsing installed extensions", err);
      }
    } catch (err) {
      console.error("reload error", err);
    }
  };
  const load_server = async () => {
    console.log("load_server", $server);
    (await get_info("get_installed_packages")).split("\n");
    parseInt((await get_info("get_installed_packages_total_size")).trim());
    pg_version = (await get_info("get_pg_version")).trim();
    server_type = (await get_info("get_server_type")).trim();
    if (pg_version > "") {
      const installed_extensions_output = await get_info("get_extensions");
      try {
        installed_extensions = JSON.parse(installed_extensions_output);
      } catch (err) {
        console.error("error parsing installed extensions", err);
      }
      reload();
    }
  };
  $$result.css.add(css);
  {
    load_server();
  }
  $$unsubscribe_servers();
  $$unsubscribe_server();
  return `<ion-header><ion-toolbar translucent="${"true"}"><ion-buttons slot="${"start"}"><ion-menu-button></ion-menu-button></ion-buttons>
		<ion-title>${escape($server.title === "" ? "Server" : $server.title)}</ion-title>
		<ion-buttons slot="${"end"}">${`<ion-button fill="${"clear"}" size="${"large"}"><ion-icon slot="${"icon-only"}"${add_attribute("icon", allIonicIcons.trashOutline, 0)}></ion-icon></ion-button>
				<ion-button fill="${"clear"}" size="${"large"}"><ion-icon slot="${"icon-only"}"${add_attribute("icon", allIonicIcons.addOutline, 0)}></ion-icon></ion-button>`}</ion-buttons></ion-toolbar></ion-header>
<ion-content class="${"ion-padding"}">${``}

	
	${$server.url !== "" && !local_server ? `<h3>PostgreSQL: ${escape(pg_version ? `${pg_version} ${server_type}` : "Not installed")}</h3>

		<ion-button>post_test</ion-button>
		<br>

		${pg_version === "" ? `<ion-button expand="${"block"}" size="${"large"}" fill="${"solid"}">Install PostgreSQL 15</ion-button>

			<ion-button expand="${"block"}" size="${"large"}" fill="${"solid"}">Install PostgreSQL 14</ion-button>

			<ion-button expand="${"block"}" size="${"large"}" fill="${"solid"}">Install PostgreSQL 13</ion-button>

			<ion-button expand="${"block"}" size="${"large"}" fill="${"solid"}">Install PostgreSQL 12</ion-button>` : `<ion-segment${add_attribute("value", display_section, 0)}><ion-segment-button value="${"log"}"><ion-label>Log</ion-label></ion-segment-button>
				<ion-segment-button value="${"config"}"><ion-label>Configuration</ion-label></ion-segment-button>
				<ion-segment-button value="${"extensions"}"><ion-label>Extensions</ion-label></ion-segment-button></ion-segment>`}

		${pg_version > "" && display_section === "extensions" ? `<ion-searchbar placeholder="${"Search extensions"}" debounce="${"500"}"></ion-searchbar>

			<ion-grid><ion-row><ion-col size="${"8"}" class="${"header_col svelte-1vmm8g4"}"><ion-grid><ion-row><ion-col size="${"6"}">Extension</ion-col>
								<ion-col size="${"6"}" class="${"ion-text-right"}">Package</ion-col></ion-row></ion-grid></ion-col>
					<ion-col size="${"2"}" class="${"header_col svelte-1vmm8g4"}"><ion-grid><ion-row><ion-col class="${"ion-text-center"}" size="${"12"}">Installed</ion-col></ion-row></ion-grid></ion-col>
					<ion-col size="${"2"}" class="${"header_col svelte-1vmm8g4"}"><ion-grid><ion-row><ion-col class="${"ion-text-center"}" size="${"12"}">Enabled</ion-col></ion-row></ion-grid></ion-col></ion-row>
				${each(extensions, (extension) => {
    return `${`<ion-row><ion-col size="${"8"}"><ion-grid style="${"background-color: var(--ion-color-light); border: 1px solid;"}"><ion-row><ion-col size="${"6"}"><b>${escape(extension.name)}</b></ion-col>
										<ion-col size="${"6"}" class="${"ion-text-right"}">${escape(extension.package)}</ion-col></ion-row>
									<ion-row><ion-col size="${"12"}">${escape(extension.desc)}</ion-col></ion-row>
								</ion-grid></ion-col>
							<ion-col size="${"2"}" class="${"ion-text-center"}">${extension.installed ? `<ion-button size="${"small"}" fill="${"outline"}">${escape(extension.installed)}</ion-button>` : `<ion-button size="${"small"}" fill="${"outline"}">Install</ion-button>`}</ion-col>
							<ion-col size="${"2"}" class="${"ion-text-center"}">${extension.installed ? `<ion-toggle color="${"primary"}" ${extension.enabled ? "checked" : ""}></ion-toggle>` : ` `}
							</ion-col></ion-row>
						<ion-row><ion-col size="${"12"}"> </ion-col>
						</ion-row>`}`;
  })}</ion-grid>` : ``}

		${`<pre>${escape(output)}</pre>`}

		${pg_version > "" && display_section === "config" ? `<br>
			This ${escape(server_type)} is currently running PostgreSQL ${escape(pg_version)}<br>
			<br>
			Change it to:<br>
			<ion-segment${add_attribute("value", new_server_type, 0)}><ion-segment-button value="${"STANDALONE"}"><ion-label>STANDALONE</ion-label></ion-segment-button>
				<ion-segment-button value="${"PRIMARY"}"><ion-label>PRIMARY</ion-label></ion-segment-button>
				<ion-segment-button value="${"SECONDARY"}"><ion-label>SECONDARY</ion-label></ion-segment-button></ion-segment>

			<ion-grid class="${"ion-padding grid375 svelte-1vmm8g4"}">${``}

				${``}</ion-grid>

			${``}

			${``}

			${`<ion-button expand="${"block"}" size="${"small"}" fill="${"outline"}">Set as STANDALONE server
				</ion-button>`}` : ``}` : ``}
	
</ion-content>`;
});
export {
  Page as default
};
