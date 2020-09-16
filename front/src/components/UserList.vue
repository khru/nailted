<template>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">

                </div>
                <div class="block relative">
                    <span
                        class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="h-4 w-4 fill-current text-gray-500"
                        >
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                            ></path>
                        </svg>
                    </span>
                    <input
                        v-model="searchedEmail"
                        placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow rounded-lg overflow-hidden"
                >
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    ID
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Fullname
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Address
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Phone
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Email
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Birth date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="user in filterUserByEmail"
                                :key="user.id"
                            >
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ user.id }}
                                    </p>
                                </td>
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt=""
                                            />
                                        </div>
                                        <div class="ml-3">
                                            <p
                                                class="text-gray-900 whitespace-no-wrap"
                                            >
                                                {{ user.fullName }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ user.address }}
                                    </p>
                                </td>
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        <a :href="'tel:' + user.phone">{{
                                            user.phone
                                        }}</a>
                                    </p>
                                </td>
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        <a :href="'mailto:' + user.email">{{
                                            user.email
                                        }}</a>
                                    </p>
                                </td>
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                >
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ user.birthDate }}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          "
                    >
                        <span
                            v-if="!searchedEmail"
                            class="text-xs xs:text-sm text-gray-900"
                        >
                            Showing {{ paginationLimit }} of
                            {{ totalOfUsers }} Entries
                        </span>
                        <span
                            v-if="searchedEmail"
                            class="text-xs xs:text-sm text-gray-900"
                        >
                            Showing {{ filterUserByEmail.length }} of
                            {{ totalOfUsers }} Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                v-on:click="previousPage()"
                                v-if="currentPage > 0"
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                            >
                                Prev
                            </button>
                            <button
                                v-on:click="nextPage()"
                                v-if="
                                    currentPage < amountOfPages &&
                                        !searchedEmail
                                "
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserList",
    data: function() {
        return {
            paginationLimit: 5,
            currentPage: 0,
            searchedEmail: "",
            usersPerPage: []
        };
    },
    methods: {
        fullNameCompare(key = "fullName", order = "asc") {
            return function innerSort(a, b) {
                const varA =
                    typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
                const varB =
                    typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return order === "desc" ? comparison * -1 : comparison;
            };
        },
        chunkUsersIntoPages(users) {
            const temporal = [];

            for (
                let i = 0, j = 0;
                i < users.length;
                i += this.paginationLimit, j++
            ) {
                const paginatorObject = {
                    page: j,
                    users: users.slice(i, i + this.paginationLimit)
                };
                temporal.push(paginatorObject);
            }

            return temporal;
        },
        nextPage() {
            this.currentPage++;
        },
        previousPage() {
            this.currentPage--;
        },
        resetPage() {
            this.currentPage = 0;
        }
    },
    computed: {
        amountOfPages: function() {
            return this.usersPerPage.length - 1;
        },
        totalOfUsers: function() {
            return this.usersPerPage.length * this.paginationLimit;
        },
        filterUserByEmail: function() {
            if (!this.searchedEmail && "" !== !this.email?.trim()) {
                if (undefined !== this.usersPerPage[this.currentPage]) {
                    return this.usersPerPage[this.currentPage].users;
                }
                return [];
            }

            return this.usersPerPage
                .map(usersPerPage => usersPerPage.users)
                .flat()
                .filter(user => {
                    return (
                        user.email
                            .toLowerCase()
                            .includes(this.searchedEmail.toLowerCase()) ||
                        user.fullName
                            .toLowerCase()
                            .includes(this.searchedEmail.toLowerCase()) ||
                        user.phone
                            .toLowerCase()
                            .includes(this.searchedEmail.toLowerCase()) ||
                        user.address
                            .toLowerCase()
                            .includes(this.searchedEmail.toLowerCase())
                    );
                });
        }
    },
    async mounted() {
        await new Promise((resolve, reject) =>
            fetch(`${process.env.VUE_APP_API_URL}`)
                .then(resp => resp.json())
                .then(users => {
                    users.forEach(
                        user => (user.fullName = `${user.name} ${user.surname}`)
                    );
                    this.usersPerPage = this.chunkUsersIntoPages(
                        users.sort(this.fullNameCompare())
                    );
                    resolve(this.usersPerPage);
                })
                .catch(reason => {
                    console.error(reason);
                    reject(reason);
                })
        );
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
    color: #42b983;
}
</style>
