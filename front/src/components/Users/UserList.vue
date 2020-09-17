<template>
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-semibold leading-tight">👥 Users</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
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
                        v-model="searchedTerm"
                        placeholder="Search"
                        class="shadow-lg appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                </div>
                <div class="flex flex-row mb-1 ml-1 sm:mb-0">
                    <button
                        @click="showModal = true"
                        href="#"
                        class="cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-lg px-5 py-2 inline-block text-blue-100 hover:text-white rounded"
                    >
                        Create user
                    </button>
                </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow rounded-lg overflow-hidden shadow-lg"
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
                                        <div class="flex-shrink-0">
                                            👤
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
                        class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
                    >
                        <span
                            id="result-count"
                            v-if="!searchedTerm"
                            class="text-xs xs:text-sm text-gray-900"
                        >
                            Showing
                            {{
                                currentPage === 0
                                    ? paginationLimit
                                    : (currentPage + 1) * paginationLimit
                            }}
                            of {{ totalOfUsers }} Entries
                        </span>
                        <span
                            v-if="searchedTerm"
                            class="text-xs xs:text-sm text-gray-900"
                        >
                            Showing
                            {{
                                filterUserByEmail.usersPerPage
                                    ? filterUserByEmail.usersPerPage.length
                                    : 0
                            }}
                            of {{ totalOfUsers }} Entries
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
                                    currentPage < amountOfPages && !searchedTerm
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
        <!--Modal-->
        <div
            v-if="showModal"
            class="modal-active modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
        >
            <div
                class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
            ></div>

            <div
                class="modal-container bg-white md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto"
            >
                <div
                    @click="showModal = false"
                    class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
                >
                    <svg
                        class="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                    >
                        <path
                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                    </svg>
                </div>

                <!-- Add margin if you want to see some of the overlay behind the modal-->
                <div class="modal-content py-6 text-left px-6">
                    <!-- Container -->
                    <div class="container mx-auto ">
                        <div class="flex justify-center">
                            <!-- Row -->
                            <div class="w-full flex">
                                <!-- Col -->
                                <div
                                    class="w-full bg-white p-5 rounded-lg lg:rounded-l-none"
                                >
                                    <h3 class="pt-4 text-2xl text-center mb-10">
                                        Create a user 👤
                                    </h3>
                                    <form
                                        class=" bg-white rounded"
                                        v-on:submit.prevent="onSubmit"
                                    >
                                        <div
                                            class="mb-4 md:flex md:justify-between"
                                        >
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label
                                                    class="block mb-2 text-sm font-bold text-gray-700"
                                                    for="name"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    v-model="newUser.name"
                                                    required="true"
                                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="name"
                                                    type="text"
                                                    placeholder="John"
                                                    title="Insert your first name (example: John)"
                                                    pattern="^[a-zA-ZáéíóúÁÉÍÓÚÀÈÌÒÙÄËÏÖÜäëïöüñÑ -]{2,}$"
                                                />
                                            </div>
                                            <div class="md:ml-2">
                                                <label
                                                    class="block mb-2 text-sm font-bold text-gray-700"
                                                    for="surname"
                                                >
                                                    Surname
                                                </label>
                                                <input
                                                    v-model="newUser.surname"
                                                    required="true"
                                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="surname"
                                                    title="Insert your last name (example: Doe)"
                                                    type="text"
                                                    placeholder="Doe"
                                                    pattern="^[a-zA-ZáéíóúÁÉÍÓÚÀÈÌÒÙÄËÏÖÜäëïöüñÑ -]{2,}$"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <label
                                                class="block mb-2 text-sm font-bold text-gray-700"
                                                for="email"
                                            >
                                                Email 📨
                                            </label>
                                            <input
                                                v-model="newUser.email"
                                                required="true"
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="johndoe@example.com"
                                                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                                            />
                                        </div>
                                        <div class="mb-4">
                                            <label
                                                class="block mb-2 text-sm font-bold text-gray-700"
                                                for="address"
                                            >
                                                Address 🏠
                                            </label>
                                            <input
                                                v-model="newUser.address"
                                                required="true"
                                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="address"
                                                type="text"
                                                placeholder="221B Baker Street"
                                                pattern="^.{4,}$"
                                            />
                                        </div>
                                        <div
                                            class="mb-4 md:flex md:justify-between"
                                        >
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label
                                                    class="block mb-2 text-sm font-bold text-gray-700"
                                                    for="phone"
                                                >
                                                    Phone ☎️
                                                </label>
                                                <input
                                                    v-model="newUser.phone"
                                                    required="true"
                                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="phone"
                                                    type="tel"
                                                    autocorrect="on"
                                                    maxlength="12"
                                                    minlength="12"
                                                    placeholder="586-722-0839"
                                                    pattern="^[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$"
                                                />
                                            </div>
                                            <div class="md:ml-2">
                                                <label
                                                    class="block mb-2 text-sm font-bold text-gray-700"
                                                    for="birth_date"
                                                >
                                                    Birth date 📅
                                                </label>
                                                <input
                                                    v-model="newUser.birthDate"
                                                    required="true"
                                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="birth_date"
                                                    data-date-format="DD/MM/YYYY"
                                                    type="date"
                                                    placeholder="11/27/1952"
                                                    :max="currentDate"
                                                    pattern="^[0-1]{0,1}[0-9]{1}\/[0-3]{0,1}[0-9]{1}\/[0-9]{4}$"
                                                />
                                            </div>
                                        </div>
                                        <div v-if="errorMessage" class="mb-6">
                                            <div
                                                class="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300"
                                            >
                                                <div
                                                    class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
                                                >
                                                    <span class="text-red-500">
                                                        <svg
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            class="h-6 w-6"
                                                        >
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                                clip-rule="evenodd"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div class="alert-content ml-4">
                                                    <div
                                                        class="alert-title font-semibold text-lg text-red-800"
                                                    >
                                                        Error
                                                    </div>
                                                    <div
                                                        class="alert-description text-sm text-red-600"
                                                    >
                                                        {{ errorMessage }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-6 text-center">
                                            <input
                                                class="w-full px-4 py-2
                                            font-bold text-white shadow-sm
                                            hover:shadow-lg bg-blue-500 rounded
                                            hover:bg-blue-700 focus:outline-none
                                            focus:shadow-outline"
                                                type="submit"
                                                value="Create user"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { UsersCollection } from "./UsersCollection";
import { User } from "./User";

export default {
    name: "UserList",
    data: function() {
        return {
            showModal: false,
            paginationLimit: 5,
            currentPage: 0,
            searchedTerm: "",
            newUser: {
                name: "",
                surname: "",
                email: "",
                address: "",
                phone: "",
                birthDate: ""
            },
            userCollection: [],
            errorMessage: ""
        };
    },
    methods: {
        nextPage() {
            this.currentPage++;
        },
        previousPage() {
            this.currentPage--;
        },
        resetPage() {
            this.currentPage = 0;
        },
        onSubmit() {
            this.errorMessage = "";

            try {
                const user = new User(this.newUser);
                fetch(`${process.env.VUE_APP_API_URL}/user`, {
                    method: "POST", // or 'PUT'
                    body: JSON.stringify(user.toJSON()), // data can be `string` or {object}!
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .catch(error => console.error("Error:", error))
                    .then(response => console.log("Success:", response));
            } catch (error) {
                console.error("Error:", error);
                this.errorMessage = error.message;
            }
        }
    },
    computed: {
        currentDate: function() {
            const today = new Date();
            const dd =
                today.getDate() < 10
                    ? `0${today.getDate()}`
                    : `${today.getDate()}`;
            //January is 0!
            const mm =
                today.getMonth() + 1 < 10
                    ? `0${today.getMonth() + 1}`
                    : `${today.getMonth() + 1}`;
            const yyyy = today.getFullYear();
            return `${yyyy}-${mm}-${dd}`;
        },
        amountOfPages: function() {
            return this.userCollection.usersPerPage
                ? this.userCollection.usersPerPage.length - 1
                : 0;
        },
        totalOfUsers: function() {
            return this.userCollection.usersPerPage
                ? this.userCollection.usersPerPage.length * this.paginationLimit
                : 0;
        },
        filterUserByEmail: function() {
            // TODO: Refactor NullObject Pattern
            if ("" === this.searchedTerm.trim()) {
                if (undefined !== this.userCollection.usersPerPage) {
                    return this.userCollection.getUserPerPageNumber(
                        this.currentPage
                    ).users;
                }
                return [];
            }

            return this.userCollection.filterUserBySearchTerm(this.searchedTerm)
                .users;
        }
    },
    async mounted() {
        await new Promise((resolve, reject) =>
            fetch(`${process.env.VUE_APP_API_URL}/users`)
                .then(resp => resp.json())
                .then(users => {
                    this.userCollection = new UsersCollection(
                        this.paginationLimit,
                        users
                    );
                    resolve(this.userCollection);
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
