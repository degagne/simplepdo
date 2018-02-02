
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:SimplePDO" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SimplePDO.html">SimplePDO</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:SimplePDO_Drivers" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="SimplePDO/Drivers.html">Drivers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:SimplePDO_Drivers_DriverInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SimplePDO/Drivers/DriverInterface.html">DriverInterface</a>                    </div>                </li>                            <li data-name="class:SimplePDO_Drivers_MySQLDriver" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SimplePDO/Drivers/MySQLDriver.html">MySQLDriver</a>                    </div>                </li>                            <li data-name="class:SimplePDO_Drivers_SqliteDriver" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="SimplePDO/Drivers/SqliteDriver.html">SqliteDriver</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:SimplePDO_Configuration" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="SimplePDO/Configuration.html">Configuration</a>                    </div>                </li>                            <li data-name="class:SimplePDO_SimplePDO" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="SimplePDO/SimplePDO.html">SimplePDO</a>                    </div>                </li>                            <li data-name="class:SimplePDO_SimplePDOStatement" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="SimplePDO/SimplePDOStatement.html">SimplePDOStatement</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "SimplePDO.html", "name": "SimplePDO", "doc": "Namespace SimplePDO"},{"type": "Namespace", "link": "SimplePDO/Drivers.html", "name": "SimplePDO\\Drivers", "doc": "Namespace SimplePDO\\Drivers"},
            {"type": "Interface", "fromName": "SimplePDO\\Drivers", "fromLink": "SimplePDO/Drivers.html", "link": "SimplePDO/Drivers/DriverInterface.html", "name": "SimplePDO\\Drivers\\DriverInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\Drivers\\DriverInterface", "fromLink": "SimplePDO/Drivers/DriverInterface.html", "link": "SimplePDO/Drivers/DriverInterface.html#method_dsn", "name": "SimplePDO\\Drivers\\DriverInterface::dsn", "doc": "&quot;Returns the MySql data source name (dsn).&quot;"},
            
            
            {"type": "Class", "fromName": "SimplePDO", "fromLink": "SimplePDO.html", "link": "SimplePDO/Configuration.html", "name": "SimplePDO\\Configuration", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\Configuration", "fromLink": "SimplePDO/Configuration.html", "link": "SimplePDO/Configuration.html#method___construct", "name": "SimplePDO\\Configuration::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\Configuration", "fromLink": "SimplePDO/Configuration.html", "link": "SimplePDO/Configuration.html#method_get", "name": "SimplePDO\\Configuration::get", "doc": "&quot;Retrieve property from configuration file.&quot;"},
            
            {"type": "Class", "fromName": "SimplePDO\\Drivers", "fromLink": "SimplePDO/Drivers.html", "link": "SimplePDO/Drivers/DriverInterface.html", "name": "SimplePDO\\Drivers\\DriverInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\Drivers\\DriverInterface", "fromLink": "SimplePDO/Drivers/DriverInterface.html", "link": "SimplePDO/Drivers/DriverInterface.html#method_dsn", "name": "SimplePDO\\Drivers\\DriverInterface::dsn", "doc": "&quot;Returns the MySql data source name (dsn).&quot;"},
            
            {"type": "Class", "fromName": "SimplePDO\\Drivers", "fromLink": "SimplePDO/Drivers.html", "link": "SimplePDO/Drivers/MySQLDriver.html", "name": "SimplePDO\\Drivers\\MySQLDriver", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\Drivers\\MySQLDriver", "fromLink": "SimplePDO/Drivers/MySQLDriver.html", "link": "SimplePDO/Drivers/MySQLDriver.html#method_dsn", "name": "SimplePDO\\Drivers\\MySQLDriver::dsn", "doc": "&quot;Returns the MySql data source name (dsn).&quot;"},
            
            {"type": "Class", "fromName": "SimplePDO\\Drivers", "fromLink": "SimplePDO/Drivers.html", "link": "SimplePDO/Drivers/SqliteDriver.html", "name": "SimplePDO\\Drivers\\SqliteDriver", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\Drivers\\SqliteDriver", "fromLink": "SimplePDO/Drivers/SqliteDriver.html", "link": "SimplePDO/Drivers/SqliteDriver.html#method_dsn", "name": "SimplePDO\\Drivers\\SqliteDriver::dsn", "doc": "&quot;Returns the MySql data source name (dsn).&quot;"},
            
            {"type": "Class", "fromName": "SimplePDO", "fromLink": "SimplePDO.html", "link": "SimplePDO/SimplePDO.html", "name": "SimplePDO\\SimplePDO", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method___construct", "name": "SimplePDO\\SimplePDO::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method___destruct", "name": "SimplePDO\\SimplePDO::__destruct", "doc": "&quot;Destructor.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_disconnect", "name": "SimplePDO\\SimplePDO::disconnect", "doc": "&quot;Disconnect from database.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_beginTransaction", "name": "SimplePDO\\SimplePDO::beginTransaction", "doc": "&quot;Initiates a transaction .&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_commit", "name": "SimplePDO\\SimplePDO::commit", "doc": "&quot;Commits a transaction.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_rollBack", "name": "SimplePDO\\SimplePDO::rollBack", "doc": "&quot;Rolls back a transaction.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_prepare", "name": "SimplePDO\\SimplePDO::prepare", "doc": "&quot;Prepares a statement for execution and\nreturns a statement object.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_bindParam", "name": "SimplePDO\\SimplePDO::bindParam", "doc": "&quot;Binds a parameter to the specified variable name.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_execute", "name": "SimplePDO\\SimplePDO::execute", "doc": "&quot;Executes a prepared statement&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDO", "fromLink": "SimplePDO/SimplePDO.html", "link": "SimplePDO/SimplePDO.html#method_setFetchMode", "name": "SimplePDO\\SimplePDO::setFetchMode", "doc": "&quot;Set the default fetch mode for this statement.&quot;"},
            
            {"type": "Class", "fromName": "SimplePDO", "fromLink": "SimplePDO.html", "link": "SimplePDO/SimplePDOStatement.html", "name": "SimplePDO\\SimplePDOStatement", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_fetchAll", "name": "SimplePDO\\SimplePDOStatement::fetchAll", "doc": "&quot;Returns an array containing all of the result set rows.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_fetch", "name": "SimplePDO\\SimplePDOStatement::fetch", "doc": "&quot;Fetches the next row from a result set.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_fetchColumn", "name": "SimplePDO\\SimplePDOStatement::fetchColumn", "doc": "&quot;Returns a single column from the next row of a result set.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_errorInfo", "name": "SimplePDO\\SimplePDOStatement::errorInfo", "doc": "&quot;Fetch extended error information associated\nwith the last operation on the statement handle.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_queryStrings", "name": "SimplePDO\\SimplePDOStatement::queryStrings", "doc": "&quot;Store all query strings for session.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_queryParams", "name": "SimplePDO\\SimplePDOStatement::queryParams", "doc": "&quot;Store all query parameters for session.&quot;"},
                    {"type": "Method", "fromName": "SimplePDO\\SimplePDOStatement", "fromLink": "SimplePDO/SimplePDOStatement.html", "link": "SimplePDO/SimplePDOStatement.html#method_fetchQueryStrings", "name": "SimplePDO\\SimplePDOStatement::fetchQueryStrings", "doc": "&quot;Fetch query strings\/params for session.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


