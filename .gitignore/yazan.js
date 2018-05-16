/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author new--laptop
 */
class Graphe {

    class Edgee {

        int v;
        char w;
        boolean Final;

        public Edgee(int v, char w, boolean f) {
            this.v = v;
            this.w = w;
            this.Final = f;
        }

        @Override
        public String toString() {
            return "(" + v + "," + w + ")";
        }
    }
    List<Edgee> G[];

    public Graphe(int n) {
        G = new LinkedList[n];
        for (int i = 0; i < G.length; i++) {
            G[i] = new LinkedList<Edgee>();
        }
    }

    boolean isConnected(int u, int v, char w) {
        for (Edgee i : G[u]) {
            if (i.v == v && i.w == w) {
                return true;
            }
        }
        return false;
    }

    boolean isenable(int u, char w) {
        for (Edgee i : G[u]) {
            if (i.w == w) {
                return true;
            }
        }
        return false;
    }

    int Next_Node(int u, int v, char w) {
        if (isConnected(u, v, w)) {
            return v;
        }
        return -1;
    }

    void addEdge(int u, int v, char w, boolean f) {
        G[u].add(new Edgee(v, w, f));
    }

    @Override
    public String toString() {
        String result = "";
        for (int i = 0; i < G.length; i++) {
            result += i + "=>" + G[i] + "\n";
        }
        return result;
    }


}

/**
 *
 * @author new--laptop
 */
public class JavaApplication26 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Graphe php = new Graphe(31);
        String Alpha = "abcdefghijklmnopqrstuvwxyz";
        String number = "1234567890";
        String Alpha_number = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()~`_+{};:?/>.<,";
        php.addEdge(0, 0, ' ', false);
        php.addEdge(0, 1, 'i', false);
        php.addEdge(1, 2, 'f', true);
        /*new*/ php.addEdge(0, 3, 'w', false);
        php.addEdge(3, 4, 'h', false);
        php.addEdge(4, 5, 'i', false);
        php.addEdge(5, 6, 'l', false);
        php.addEdge(6, 7, 'e', true);
        /*new*/ php.addEdge(0, 8, 'f', false);
        php.addEdge(8, 9, 'o', false);
        php.addEdge(9, 10, 'r', true);
        /*new*/ php.addEdge(0, 11, 'c', false);
        php.addEdge(11, 12, 'a', false);
        php.addEdge(12, 13, 's', false);
        php.addEdge(13, 14, 'e', true);
        /*new*/ php.addEdge(0, 15, 'c', false);
        php.addEdge(15, 16, 'l', false);
        php.addEdge(16, 17, 'a', false);
        php.addEdge(17, 18, 's', false);
        php.addEdge(18, 19, 's', true);
        /*new*/ php.addEdge(0, 20, 's', false);
        php.addEdge(20, 21, 't', false);
        php.addEdge(21, 22, 'a', false);
        php.addEdge(22, 23, 't', false);
        php.addEdge(23, 24, 'i', false);
        php.addEdge(24, 25, 'c', true);
        /*new*/
        for (int i = 0; i < number.length(); i++) {
            php.addEdge(0, 26, number.charAt(i), true);

        }
        for (int i = 0; i < number.length(); i++) {
            php.addEdge(26, 26, number.charAt(i), true);
        }
        php.addEdge(26, 27, '.', false);
        for (int i = 0; i < number.length(); i++) {
            php.addEdge(27, 26, number.charAt(i), true);

        }
        /*new*/
        php.addEdge(0, 28, '$', false);
        for (int i = 0; i < Alpha.length(); i++) {
            php.addEdge(28, 29, Alpha.charAt(i), true);
        }
        for (int i = 0; i < number.length(); i++) {
            php.addEdge(29, 30, number.charAt(i), true);
        }
        for (int i = 0; i < php.G.length; i++) {
            for (int j = 0; j < Alpha_number.length(); j++) {
                if (!php.isenable(i, Alpha_number.charAt(j))) {
                    php.addEdge(i, 31, Alpha_number.charAt(j), false);
                }
            }
        }
        //System.out.println(php);
     
  
    }

}
